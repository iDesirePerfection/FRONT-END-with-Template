import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidateService } from 'app/services/candidate-services/candidate.service';
import { Candidate } from 'app/services/candidate-services/models/candidate.model';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {
  currentCandidate: Candidate= {imageUrl:"pp fahd.jpg"};
  data: Date = new Date();

  constructor(private route: ActivatedRoute,private candidateService: CandidateService) { }

  ngOnInit() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('profile-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
    navbar.classList.add('bg-danger');
    let id = this.route.snapshot.paramMap.get('id');
    this.candidateService.getCandidateById(id).subscribe(candidate => {
      this.currentCandidate = candidate;

      this.candidateService.getCandidateById(localStorage.getItem('id')).subscribe( connectedCandidate => 
        {
          var i;
          for(i=0;i<connectedCandidate.contacts.length;i++)
            {
                if(connectedCandidate.contacts[i].id==parseInt(id))
                {
                    this.currentCandidate.follow="Unfollow";
                    break;
                }
                else 
                {
                  this.currentCandidate.follow="Follow";
                    break;
                }
            }
        }
        );
    })


  }

  ngOnDestroy() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('profile-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
    navbar.classList.remove('bg-danger');
  }

  followCandidate()
  {
    this.currentCandidate.follow="Unfollow";
    this.candidateService.followCandidate(localStorage.getItem('id'),this.currentCandidate.id.toString()).subscribe();
  }
  unfollowCandidate()
  {
    this.currentCandidate.follow="Follow";
    this.candidateService.followCandidate(localStorage.getItem('id'),this.currentCandidate.id.toString()).subscribe();
  }

}
