import { Component, OnInit } from '@angular/core';
import { CandidateService } from 'app/services/candidate-services/candidate.service';
import { Training } from 'app/services/candidate-services/models/training.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-interview-training',
  templateUrl: './interview-training.component.html',
  styleUrls: ['./interview-training.component.scss']
})
export class InterviewTrainingComponent implements OnInit {

  trainings: Training[] = [];
  activeVideo:string = "https://www.youtube.com/embed/kayOhGRcNt4";
  constructor(private candidateSerivce: CandidateService,public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.candidateSerivce.getTraining().subscribe(trainings => {
      this.trainings = trainings;
      console.log(this.trainings);
    })
    console.log(this.activeVideo)

  }

  selectVideo(id) {
    var i;
    for (i = 0; i < this.trainings.length; i++) {
      if (this.trainings[i].id == id) {
        this.activeVideo = this.trainings[i].answerURL;
        break;
      }
    }
    console.log(this.activeVideo);
  }

}
