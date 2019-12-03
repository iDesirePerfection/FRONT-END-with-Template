import { Component, OnInit } from '@angular/core';
import { EventService } from 'app/services/enterprise-services/event.service';
import { Event } from '@angular/router';
import { Participation } from 'app/services/enterprise-services/models/participation';


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
  

  constructor(private eventService:EventService) { }

  ngOnInit() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('blog-posts');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
    navbar.classList.add('bg-danger');


    this.eventService.GetAllEvent().subscribe(e => {
      this.events = e;
      console.log(e);
    });

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
  this.eventService.AddParticipation(id).subscribe(p => {
    console.log(p);
    this.participations =p;
  })

}




}
