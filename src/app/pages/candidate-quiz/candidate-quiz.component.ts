import { Component, OnInit } from '@angular/core';
import { QuizService } from 'app/services/interview-services/quiz.service';
import { Quiz } from 'app/services/interview-services/models/quiz';
import { Answer } from 'app/services/interview-services/models/answer';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-candidate-quiz',
  templateUrl: './candidate-quiz.component.html',
  styleUrls: ['./candidate-quiz.component.scss']
})
export class CandidateQuizComponent implements OnInit {

  constructor(private quizService: QuizService,private modalService: NgbModal) { }
  public list: Quiz[];
  public listAnswers:number[]=[];
  selectedQuiz:Quiz;
  closeResult;
  show(id:number){
    console.log(id);
  }

  ngOnInit() {
    this.quizService.CandidateQuiz(4).subscribe(u=>this.list=u);
  }

  open(content,qz:Quiz) {
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
        this.selectedQuiz=null;
        if (reason === ModalDismissReasons.ESC) {
          return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
          return 'by clicking on a backdrop';
        } else {
          return  `with: ${reason}`;
        }
      }
      reload(){
        this.quizService.CandidateQuiz(4).subscribe(u=>this.list=u);

      }

      onSubmit(event:any,selected:Quiz){
        let i:number=selected.questions.length;
        //for(let a =0;a<i;a++){
          //let s="q"+a;
          this.listAnswers.push(event.target.q0.value);
          this.listAnswers.push(event.target.q1.value);
          this.listAnswers.push(event.target.q2.value);
          this.listAnswers.push(event.target.q3.value);
          this.listAnswers.push(event.target.q4.value);
        //}
        console.log(this.listAnswers);
        this.quizService.takeQuiz(selected.id,this.listAnswers).subscribe(u=>u);
        this.listAnswers=[];

      }

}
