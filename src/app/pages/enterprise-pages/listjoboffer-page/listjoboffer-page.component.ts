import { Component, OnInit } from '@angular/core';
import { JobofferService } from 'app/services/enterprise-services/joboffer.service';
import { Joboffer } from 'app/services/enterprise-services/models/joboffer';

@Component({
  selector: 'app-listjoboffer-page',
  templateUrl: './listjoboffer-page.component.html',
  styleUrls: ['./listjoboffer-page.component.scss']
})
export class ListjobofferPageComponent implements OnInit {


  joboffers:Joboffer[]=[];
  hotjoboffers:Joboffer[]=[];
  searchText;

  constructor(private jobofferService:JobofferService) { }

  ngOnInit() {
    var body = document.getElementsByTagName('body')[0];
      body.classList.add('blog-posts');
      var navbar = document.getElementsByTagName('nav')[0];
      navbar.classList.remove('navbar-transparent');
      navbar.classList.add('bg-danger');
      var body = document.getElementsByTagName('body')[0];
        body.classList.add('search-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('bg-danger');



    this.jobofferService.GetAllJoboffer().subscribe(jo => {
      this.joboffers = jo;
      console.log(jo);
    });
      this.jobofferService.GetJobofferByVues().subscribe(hj => {
        this.hotjoboffers = hj;
        console.log(hj);
    });
  }

  ngOnDestroy(){
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('blog-posts');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('bg-danger');
    navbar.classList.add('navbar-transparent');

}





}
