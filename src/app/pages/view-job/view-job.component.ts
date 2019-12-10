import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidateService } from 'app/services/candidate-services/candidate.service';
import { Joboffer } from 'app/services/enterprise-services/models/joboffer';
import { Candidate } from 'app/services/candidate-services/models/candidate.model';

@Component({
  selector: 'app-view-job',
  templateUrl: './view-job.component.html',
  styleUrls: ['./view-job.component.scss']
})
export class ViewJobComponent implements OnInit {

  job: Joboffer = { JOtitle: "", JOdescription: "" };
  id;
  status: string="Apply For This Job";
  data: Date = new Date();
  can:Candidate;
  constructor(private route: ActivatedRoute, private candidateService: CandidateService) { }

  ngOnInit() {

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('discover');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
    navbar.classList.add('bg-danger');
    let id = this.route.snapshot.paramMap.get('id');
    this.id = id;
    this.candidateService.getOfferById(id).subscribe(offer => {
      this.job = offer;
      this.candidateService.getCandidateById(localStorage.getItem('id')).subscribe(can=> {
        
        var i;
        for(i=0;i<can.jobApplications.length;i++)
        {
          console.log(can.jobApplications[i].id);
          if(this.id==can.jobApplications[i].jobId)
          {
            this.status="Already Applied";
            break;
          }
          console.log(this.status);
        }
        this.can=can;
      })
    }


    );
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('discover');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('bg-danger');
    navbar.classList.add('navbar-transparent');
  }

  applyForAJob() {
    this.candidateService.applyForAJob(localStorage.getItem('id'), this.id).subscribe(can=> this.can=can);
    this.status = "Already Applied";
  }

  cancelApplication()
  {
    var i;
    for(i=0;i<this.can.jobApplications.length;i++)
    {
      if(this.can.jobApplications[i].jobId==this.id)
      {
        this.candidateService.cancelApplication(localStorage.getItem('id'),this.can.jobApplications[i].id).subscribe();
      this.status = "Apply For This Job";
      break;
      }
    }
      
  }

}
