import { Component, OnInit } from '@angular/core';
import { EntprofileService } from 'app/services/enterprise-services/entprofile.sevice';
import { Entprofile } from 'app/services/enterprise-services/models/entprofile';
import { Candidate } from 'app/services/candidate-services/models/candidate.model';
import { CandidateService } from 'app/services/candidate-services/candidate.service';

@Component({
  selector: 'app-discover-companies',
  templateUrl: './discover-companies.component.html',
  styleUrls: ['./discover-companies.component.scss']
})
export class DiscoverCompaniesComponent implements OnInit {

  data: Date = new Date();
  enterprises: Entprofile[] = [];
  candidate:Candidate;
  page:any=1;
  pageSize=8;
  loading:boolean=true;
  constructor(private enterpriseService: EntprofileService,private candidateService: CandidateService) { }

  ngOnInit() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('discover');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
    navbar.classList.add('bg-danger');

    

    this.candidateService.getCandidateById(localStorage.getItem('id')).subscribe(can=> {
      this.candidate=can;
      this.enterpriseService.GetAllEnt().subscribe(ents => {
        this.enterprises = ents;
        var i;
        var j;

          for (j=0;j< this.enterprises.length;j++)
            {  
                this.enterprises[j].subscribed="Subscribe";
            }

        for(i=0;i< this.candidate.subscriptions.length;i++)
        {
            for (j=0;j< this.enterprises.length;j++)
            {
              if(this.candidate.subscriptions[i].eid==this.enterprises[j].eid)
              {
              this.enterprises[j].subscribed="Unsubscribe";
              console.log(this.enterprises[j].ename);
              console.log(this.enterprises[j].subscribed);
              }
                
            }
        }
        console.log(this.enterprises);
     

      });
      this.loading=false;
    });
    


    
    
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('discover');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('bg-danger');
    navbar.classList.add('navbar-transparent');
  }

  subscribe(entId:string)
  {
    this.candidateService.subscribeToEnterprise(this.candidate.id.toString(),entId).subscribe(can => {
      var i=0;
      for(i=0;i<can.subscriptions.length;i++)
      {
        if(can.subscriptions[i].eid==parseInt(entId))
        {
          this.candidate.subscriptions.push(can.subscriptions[i]);

          break;
        }
      }

      for(i=0;i<this.enterprises.length;i++)
      {
        if(this.enterprises[i].eid==parseInt(entId))
        {
          this.enterprises[i].subscribed="Unsubscribe";
          break;
        }
      }
      
    })
  }
  unsubscribe(entId:string)
  {
    this.candidateService.unsubscribeFromEnterprise(this.candidate.id.toString(),entId).subscribe(can => {
      var i=0;
      for(i=0;i<can.subscriptions.length;i++)
      {
        if(can.subscriptions[i].eid==parseInt(entId))
        {
          this.candidate.subscriptions.splice(i,1);
          break;
        }
      }

      for(i=0;i<this.enterprises.length;i++)
      {
        if(this.enterprises[i].eid==parseInt(entId))
        {
          this.enterprises[i].subscribed="Subscribe";
          break;
        }
      }
      
    })
  }

}
