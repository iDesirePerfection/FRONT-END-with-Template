import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../add-experience-form/DialogData';
import { Experience } from 'app/services/candidate-services/models/experience.model';

@Component({
  selector: 'app-edit-experience-form',
  templateUrl: './edit-experience-form.component.html',
  styleUrls: ['./edit-experience-form.component.scss']
})
export class EditExperienceFormComponent implements OnInit {

  dt:Date=new Date();
  constructor(public dialogRef: MatDialogRef<EditExperienceFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Experience) { }

  ngOnInit() {
  }

}
