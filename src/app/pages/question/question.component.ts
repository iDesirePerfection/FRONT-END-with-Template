import { Component, OnInit } from '@angular/core';
import { Question } from 'app/services/interview-services/models/question';
import { QuestionService } from 'app/services/interview-services/question.service';
import { Answer } from 'app/services/interview-services/models/answer';
import { AnswerService } from 'app/services/interview-services/answer.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  constructor(private modalService: NgbModal, private questionService: QuestionService, private answersService: AnswerService) { }
  questions: Question[] = null;
  closeResult;
  answers: Answer[] = null;
  selectedQuestion: Question = null;
  switchState:boolean;
  quest:string;
  answerText:string;
  showAns:boolean=true;
  ngOnInit() {
    this.questionService.getQuestions().subscribe(u => this.questions = u);
    this.answersService.getAnswers().subscribe(t => this.answers = t);
    console.log(this.questions);
  }
  open(content, qu: Question) {
    console.log(qu);
    this.selectedQuestion = qu;
    // this.updateform={JOtitle:title,JOarea:area,JOdescription:description,JOexperience:experience,interests:interests}

    this.modalService.open(content, { ariaLabelledBy: 'modal1-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    this.reload();
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  reload() {
    this.questionService.getQuestions().subscribe(u => this.questions = u);
    this.answersService.getAnswers().subscribe(t => this.answers = t);
    console.log(this.questions);

  }

  assign(id: number) {
    this.questionService.assignAnswer(this.selectedQuestion.id, id).subscribe(u => this.reload());
    this.reload();
  }
  onSubmit(form){
    console.log(this.quest);
    this.questionService.addQuestion(this.quest).subscribe(y=>this.reload());
    this.reload();
    this.quest="";
    console.log(this.questions);
    }
    deleteQuestion(id:number){
      this.questionService.deleteQuestion(id).subscribe(u=>this.reload());
    }
    showForm(){
      this.showAns=!this.showAns;
    }
    onSubmitAnsForm(form){
      console.log(this.answerText);
      this.answersService.addAnswer(this.answerText).subscribe(u=>this.reload());
      this.answerText="";
      this.reload();
    }
    setCorrect(id:number){
      this.answersService.setCorrect(id).subscribe(u=>this.reload());
    }
}
