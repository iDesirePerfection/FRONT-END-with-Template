import { Component, OnInit } from '@angular/core';
import { Quiz } from 'app/services/interview-services/models/quiz';
import { QuizService } from 'app/services/interview-services/quiz.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { InterviewService } from 'app/services/interview-services/interview.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Question } from 'app/services/interview-services/models/question';
import { QuestionService } from 'app/services/interview-services/question.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  constructor(private modalService: NgbModal,private questionService: QuestionService,private quizService: QuizService, private interviewService: InterviewService) { }
  public list: Quiz[] = null;
  isClicked: boolean = false;
  public q: Quiz = null;
  switchState: boolean;
  msg: string;
  closeResult;
  idSelected:number;
  questions:Question[]=null;
  selectedQuiz:Quiz;
  arr;
  reload() {
    this.quizService.displayQuizForOffer(1).subscribe(l => this.list = l);
    this.questionService.getQuestions().subscribe(u => this.questions = u);
  }
  ngOnInit() {
    this.quizService.displayQuizForOffer(1).subscribe(l => this.list = l);
    this.questionService.getQuestions().subscribe(u => this.questions = u);
    console.log(this.list);
  }
  cancelQuiz(id: number) {
    this.quizService.deleteQuiz(id).subscribe(u => { this.reload() });
  }
  setInterview(q: Quiz) {
    if (q.state === "Validated") {
      this.quizService.setInterview(q.id).subscribe(t => t);
      return true;
    }
    else { return false; }
  }
  validateQuiz() {
    this.quizService.validateQuiz(1).subscribe(u => u);
    this.isClicked = true;
    this.reload()
  }
  show() {
    console.log(this.switchState);
  }
  hello = {
    'text-align': 'center',
  }
  chooseEmployee() {
    this.interviewService.chooseWinner(1).subscribe(l => this.q = l);
  }

  opena(content,qz:Quiz) {
  this.arr=Array(10-qz.questions.length).fill(10-qz.questions.length);
  this.selectedQuiz=qz;
  console.log(this.selectedQuiz);
   // this.updateform={JOtitle:title,JOarea:area,JOdescription:description,JOexperience:experience,interests:interests}
  
    this.modalService.open(content, {ariaLabelledBy: 'modal1-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
   }
    private getDismissReason(reason: any): string {
      this.arr=null;
      this.selectedQuiz=null;
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }
    assignQuestion(idQ:number,idquestion:number){
      console.log(idQ);
      console.log(idquestion);
      this.quizService.assignQuestion(idQ,idquestion).subscribe(u=>this.reload());
    }
}
