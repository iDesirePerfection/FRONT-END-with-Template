import { Component, OnInit } from '@angular/core';
import { Quiz } from 'app/services/interview-services/models/quiz';
import { QuizService } from 'app/services/interview-services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  constructor(private quizService:QuizService) { }
  public list:Quiz[]=null;
  

  ngOnInit() {
    this.quizService.displayQuizForOffer(1).subscribe(l=>this.list=l);
    console.log(this.list);
  }
  cancelQuiz(id:number){
    this.quizService.deleteQuiz(id).subscribe(u=>u);
  }
  setInterview(id:number){
this.quizService.setInterview(id).subscribe(t=>t);
  }

}
