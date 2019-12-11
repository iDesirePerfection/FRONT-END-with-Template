import { Component, OnInit } from '@angular/core';
import { CandidateService } from 'app/services/candidate-services/candidate.service';
import { Candidate } from 'app/services/candidate-services/models/candidate.model';
import { EditProfileFormComponent } from '../edit-profile-form/edit-profile-form.component';
import { BasicCandidate } from './basic-candidate';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'app/services/user-services/models/user';
import { Joboffer } from 'app/services/enterprise-services/models/joboffer';
import { Router } from '@angular/router';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  viewDate = new Date();
events = [];

  data: Date = new Date();
  contacts: Candidate[] = [];
  jobOffers:any[] = [];
  jobOffersEmpty:any[] = [];
  searchStarted:boolean=false;
  criteria:string;
  basicCandidate: BasicCandidate = { firstName: "", lastName: "", title: "", bio: "",imageUrl:"./assets/img/faces/"};
  constructor(private candidateService: CandidateService, public dialog: MatDialog,private router: Router) { }

  ngOnInit() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('profile-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
    navbar.classList.add('bg-danger');
    this.candidateService.getFriendsList(localStorage.getItem('id')).subscribe(contacts => {
      this.contacts = contacts;
    });
    this.basicCandidate.firstName = localStorage.getItem("firstname");
    this.basicCandidate.lastName = localStorage.getItem("lastname");
    this.basicCandidate.title = localStorage.getItem("title");
    this.basicCandidate.bio = localStorage.getItem("Biography");
    this.basicCandidate.imageUrl += localStorage.getItem("imageUrl");

    this.candidateService.getOffers().subscribe(jobs => {
      this.jobOffers=jobs;

      console.log(this.jobOffers);
      console.log(this.searchStarted);
    })







  }
  ngOnDestroy() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('profile-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
    navbar.classList.remove('bg-danger');
  }

  editProfile() {
    const dialogRef = this.dialog.open(EditProfileFormComponent, {
      width: '400px',
      data: this.basicCandidate,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.candidateService.updateBasicCandidate(parseInt(localStorage.getItem('id')), result.firstName, result.lastName, result.title, result.bio).subscribe(can => {
        this.basicCandidate = result;
        console.log(result);
      }
      );

    });


  }

  startSearch()
  {
    this.searchStarted=true;
    this.jobOffersEmpty=this.jobOffers;
  }



  clearJobs()
  {
    if(this.criteria=="")
    this.jobOffersEmpty=[];
    else 
    {
      this.jobOffersEmpty=this.jobOffers;
    }
  }

  viewJob(jobId: string) {
    console.log(jobId);
    this.router.navigate(['/pages/ViewJob', jobId]);
  }

}
