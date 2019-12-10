import { Component, OnInit } from '@angular/core';
import { Candidate } from 'app/services/candidate-services/models/candidate.model';
import { CandidateService } from 'app/services/candidate-services/candidate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-discover-network',
  templateUrl: './discover-network.component.html',
  styleUrls: ['./discover-network.component.scss']
})
export class DiscoverNetworkComponent implements OnInit {


  data: Date = new Date();
  candidates: Candidate[] = [];
  candidatesBackup: Candidate[] = [];
  currentCandidate: Candidate;
  renderFollow: String = "undefined";
  criteria: string = "";
  constructor(private candidateService: CandidateService, private router: Router) { }



  ngOnInit() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('discover');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
    navbar.classList.add('bg-danger');
    this.candidateService.getCandidateById(localStorage.getItem('id')).subscribe(candidate => {
      this.currentCandidate = candidate;
      this.candidateService.getCandidateList(localStorage.getItem('id')).subscribe(candidates => {
        this.candidates = candidates;
        this.candidatesBackup = candidates;
        var i;
        var j = 0;
        for (j = 0; j < this.candidates.length; j++) {
          this.candidates[j].follow = "Follow";
        }

        for(i=0;i<this.currentCandidate.contacts.length;i++)
        {
          for(j=0;j<this.candidates.length;j++)
          {
           if(this.currentCandidate.contacts[i].id==this.candidates[j].id)
           {
             this.candidates[j].follow="Unfollow";
           }
          }
        }



      });

    })





  }
  ngOnDestroy() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('discover');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('bg-danger');
    navbar.classList.add('navbar-transparent');
  }

  isFollowing(canId: number) {
    var i = 0;
    for (i = 0; i < this.currentCandidate.contacts.length; i++) {
      if (this.currentCandidate.contacts[i].id == canId)
        return true;
    }
    return false;
  }

  followCandidate(followedId: string) {
    var i=0;
    for(i=0;i<this.candidates.length;i++)
    {
      if(this.candidates[i].id==parseInt(followedId))
      {
        this.candidates[i].follow="Unfollow";
        break;
      }
    }
    this.candidateService.followCandidate(this.currentCandidate.id.toString(), followedId).subscribe(can => {
      this.currentCandidate.contacts.push(can);

    });
  }
  unfollowCandidate(followedId: string) {
    var i=0;
    for(i=0;i<this.candidates.length;i++)
    {
      if(this.candidates[i].id==parseInt(followedId))
      {
        this.candidates[i].follow="Follow";
        break;
      }
    }
    this.candidateService.unfollowCandidate(this.currentCandidate.id.toString(), followedId).subscribe(can => {
      var i = 0;
      for (i = 0; i < this.currentCandidate.contacts.length; i++) {
        if (this.currentCandidate.contacts[i].id == can.id) {
          this.currentCandidate.contacts.splice(i, 1);
          break;
        }
      }
    });
  }

  onSubmit() {
    console.log(this.criteria);
    if (this.criteria == "") {
      this.candidates = this.candidatesBackup;
    }
    else
      this.candidates = this.candidates.filter(can => !can.firstName.toLowerCase().indexOf(this.criteria));
  }

  onSelect(candidateId: string) {
    this.router.navigate(['/pages/ViewProfile', candidateId]);
  }


}
