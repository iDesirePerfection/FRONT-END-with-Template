import { Component, OnInit } from '@angular/core';
import { EventService } from 'app/services/enterprise-services/event.service';
import { Event } from 'app/services/enterprise-services/models/event';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addentevent-page',
  templateUrl: './addentevent-page.component.html',
  styleUrls: ['./addentevent-page.component.scss']
})
export class AddenteventPageComponent implements OnInit {



  public addform:Event={EEtitle:'',EEplace:'',EESdate:null,EEEdate:null,EEdescription:'',EEminparticipants:null,
    EEmaxparticipants:null,EEprice:''}

  constructor(private eventService : EventService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  addEvent(){
    this.eventService.AddEvent(this.addform.EEtitle,this.addform.EEplace,this.addform.EESdate,this.addform.EEEdate,this.addform.EEdescription,this.addform.EEminparticipants,this.addform.EEmaxparticipants,this.addform.EEprice,localStorage.getItem('id')).subscribe(e => {
      this.toastr.success('Added with Success!', 'Saving!',
      {timeOut: 3000});;
      console.log(e);
     });
   }

}
