import { Component, OnInit } from '@angular/core';
import { EventService } from 'app/services/enterprise-services/event.service';

import { Participation } from 'app/services/enterprise-services/models/participation';
import { User } from 'app/services/user-services/models/user';
import { Event } from 'app/services/enterprise-services/models/event';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listevent-page',
  templateUrl: './listevent-page.component.html',
  styleUrls: ['./listevent-page.component.scss']
})
export class ListeventPageComponent implements OnInit {

  data : Date = new Date();
  events:Event[]=[];
  participations:Participation[]=[];
  idSelected;
  searchText;
  collection = { count: null, events: [] };
  config:any;

  constructor(private eventService:EventService, private toastr: ToastrService) { }

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



    this.eventService.GetAllEvent().subscribe(e => {
      this.collection.events = e;
      console.log(e);
    });

    this.config = {
      itemsPerPage: 4,
      currentPage: 1,
      totalItems: this.collection.count
    };


}
ngOnDestroy(){
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('blog-posts');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('bg-danger');
    navbar.classList.add('navbar-transparent');
}

Participate(id){
  this.idSelected=id;
  this.eventService.AddParticipation(id,localStorage.getItem('id')).subscribe(p => {
    console.log(p);
    this.participations =p;
    this.toastr.success('Hello world!', 'Toastr fun!',
    {timeOut: 2000});;
  })

}


pageChanged(event){
  this.config.currentPage = event;
}


showSuccess() {
  this.toastr.success('Hello world!', 'Toastr fun!',
  {timeOut: 2000});;
}
showError() {
this.toastr.error('everything is broken', 'Major Error', {
timeOut: 3000
});
}






}
