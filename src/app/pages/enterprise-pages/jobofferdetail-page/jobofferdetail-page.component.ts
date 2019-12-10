import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobofferService } from 'app/services/enterprise-services/joboffer.service';
import { Joboffer } from 'app/services/enterprise-services/models/joboffer';

@Component({
  selector: 'app-jobofferdetail-page',
  templateUrl: './jobofferdetail-page.component.html',
  styleUrls: ['./jobofferdetail-page.component.scss']
})
export class JobofferdetailPageComponent implements OnInit {

  joboffers:Joboffer[]=[];
  joid;
  constructor(private jobofferService:JobofferService,private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params =>{
      this.joid=this.route.snapshot.params.joid;
      console.log(this.joid);
    });
    
    this.jobofferService.GetJobofferById(this.joid).subscribe(p => {
      this.joboffers = p;
      console.log(p);
    });


    
  }

}
