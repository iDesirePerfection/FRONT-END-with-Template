import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InterviewService } from 'app/services/interview-services/interview.service';
import { QuizService } from 'app/services/interview-services/quiz.service';
import { Quiz } from 'app/services/interview-services/models/quiz';
import { Interview } from 'app/services/interview-services/models/interview';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.scss']
})
export class InterviewComponent implements OnInit {

  constructor(private activatedroute: ActivatedRoute,private interviewService:InterviewService,private quizService:QuizService) { }
id:number
quiz:Quiz=null;
interview:Interview=null;
  ngOnInit() {
    this.activatedroute.paramMap.subscribe(result => this.id = Number(result.get('id')));
    this.quizService.displayQuiz(this.id).subscribe(q=>this.quiz=q);
    this.interview=this.quiz.interview;
  }

}
