import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Experience } from 'app/services/candidate-services/models/experience.model';
import { ExperiencesService } from 'app/services/candidate-services/experiences.service';
import { DialogData } from 'app/pages/add-experience-form/DialogData';
import { EditExperienceFormComponent } from '../edit-experience-form/edit-experience-form.component';
import { AddExperienceFormComponent } from '../add-experience-form/add-experience-form.component';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  animal: string="fahd";
  name: string;
  exp:any={};
  experiences: Experience[] = [];
  @Input() isViewing: boolean;
  @Input() id;
  constructor(public dialog: MatDialog,private experiencesService: ExperiencesService) { }

  ngOnInit() {
    this.experiencesService.getExperiencesByCandidateId(this.id).subscribe(exps => {
      this.experiences = exps;
    });
  }

  addExperience(): void {
    const dialogRef = this.dialog.open(AddExperienceFormComponent, {
      width: '400px',
      data: this.exp,
    });

    dialogRef.afterClosed().subscribe(result => {
      
    this.experiencesService.addExperienceToCandidate(result.designation,result.type,result.startDate,result.endDate,parseInt(this.id)).subscribe(exp=>{
      console.log(exp);
      this.experiences.push(exp);
    });

    });
  }

  editExperience(exp:Experience): void {
    const dialogRef = this.dialog.open(EditExperienceFormComponent, {
      width: '400px',
      data: exp,
    });

    dialogRef.afterClosed().subscribe(result => {
    this.experiencesService.updateExperience(result.id,result.designation,result.type,result.startDate,result.endDate).subscribe(exp=>{
      var i;
      for(i=0;i<this.experiences.length;i++)
      {
        if(result.id==this.experiences[i].id)
        {
          // TODO fix date after update, displays as object for some reasons..
          this.experiences[i]=result;
          break;
        }
      }

    });

    });
  }

  deleteExperience(id:number)
  {
    var i;
    for(i=0;i<this.experiences.length;i++)
    {
        if(this.experiences[i].id==id)
        {
          this.experiences.splice(i,1);
          break;
        }
    }

    this.experiencesService.deleteExperience(id.toString(),this.id).subscribe();
  }

  test() {
    this.experiences[0].startDate= new Date();
  }

}
