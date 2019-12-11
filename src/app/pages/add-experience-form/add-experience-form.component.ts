import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ExperienceComponent } from '../experience/experience.component';
import { DialogData } from './DialogData';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-experience-form',
  templateUrl: './add-experience-form.component.html',
  styleUrls: ['./add-experience-form.component.scss']
})
export class AddExperienceFormComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddExperienceFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData){ }

    ngOnInit() {
      
    }

     onNoClick(): void {
       this.dialogRef.close();
     }

  

  

 

}
