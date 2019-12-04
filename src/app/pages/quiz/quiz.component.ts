import { Component, OnInit } from '@angular/core';
import { Quiz } from 'app/services/interview-services/models/quiz';
import { QuizService } from 'app/services/interview-services/quiz.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  constructor(private quizService: QuizService) { }
  public list: Quiz[] = null;
  isClicked: boolean = false;
  switchState:boolean;
  msg: string;

  ngOnInit() {
    this.quizService.displayQuizForOffer(1).subscribe(l => this.list = l);
    console.log(this.list);
  }
  cancelQuiz(id: number) {
    this.quizService.deleteQuiz(id).subscribe(u => u);
  }
  setInterview(q: Quiz) {
    if (q.state === "Validated") {
      this.quizService.setInterview(q.id).subscribe(t => t);
      return true;
    }
    else { return false; }
  }
  validateQuiz() {
    this.quizService.validateQuiz(1).subscribe(u => this.msg);
    this.isClicked = true;
  }
  show(){
    console.log(this.switchState);
  }
  hello={
    'text-align': 'center',
  }

}
