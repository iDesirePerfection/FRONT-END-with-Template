import { Component, OnInit, Input } from '@angular/core';
import { JobofferService } from 'app/services/enterprise-services/joboffer.service';
import { Joboffer } from 'app/services/enterprise-services/models/joboffer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listjoboffer-page',
  templateUrl: './listjoboffer-page.component.html',
  styleUrls: ['./listjoboffer-page.component.scss']
})
export class ListjobofferPageComponent implements OnInit {


  joboffers:Joboffer[]=[];
  hotjoboffers:Joboffer[]=[];
  searchText;
  public joid;
  exp=0;

 collection = { count: null, joboffers: [] };
 config:any;


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
      //this.joboffers = jo;
      this.collection.joboffers = jo ;
      console.log(jo);
    });

    this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: this.collection.count
    };


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

getJobofferByExp(){
  console.log(this.exp);
  this.jobofferService.GetJobofferByExp(this.exp).subscribe(hj => {
    this.collection.joboffers = hj;
    console.log(hj);
});
}


pageChanged(event){
  this.config.currentPage = event;
}




}
