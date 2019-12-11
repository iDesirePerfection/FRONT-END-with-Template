import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BasicCandidate } from '../profile/basic-candidate';

@Component({
  selector: 'app-edit-profile-form',
  templateUrl: './edit-profile-form.component.html',
  styleUrls: ['./edit-profile-form.component.scss']
})
export class EditProfileFormComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditProfileFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BasicCandidate) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  updateImage(imageUrl:string) {
  this.data.imageUrl=imageUrl;
  console.log(typeof imageUrl);
  }

}
