import { Component, OnInit, } from '@angular/core';
import * as Rellax from 'rellax';
import { Entprofile } from 'app/services/enterprise-services/models/entprofile';
import { EntprofileService } from 'app/services/enterprise-services/entprofile.sevice';
import { stringify } from 'querystring';
import { NgbModal, ModalDismissReasons, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { EntprofilePageComponent } from '../entprofile-page/entprofile-page.component';
import { ActivatedRoute, Event } from '@angular/router';

import { EventService } from 'app/services/enterprise-services/event.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-enterpriseprofile-page',
  templateUrl: './enterpriseprofile-page.component.html',
  styleUrls: ['./enterpriseprofile-page.component.scss']
})
export class EnterpriseprofilePageComponent implements OnInit {

  data : Date = new Date();
  entprofile:Entprofile[]=[];
  events:Event[]=[];
  closeResult;
  idSelected;
  entId;

  

  public updateform:Entprofile={ename:'',edomain:'',elocation:'',employeesnumber:null,edescription:''}

  

  constructor(private entprofileService : EntprofileService , private eventService : EventService,private modalService: NgbModal , private route: ActivatedRoute, private toastr: ToastrService) { }


  ngOnInit() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('profile-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
    navbar.classList.add('bg-danger');
    //role
    this.checkStatus = this.localStorageItem();

    this.route.paramMap.subscribe(params =>{
      this.entId=this.route.snapshot.params.entId;
      console.log(this.entId);
    });
    
    this.entprofileService.GetEnterpriseById(this.entId).subscribe(p => {
      this.entprofile = p;
      console.log(p);
    });

   

      this.eventService.GetEventByEnt(this.entId).subscribe(e => {
        this.events = e;
        console.log(e);
      });
    

}
ngOnDestroy(){
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('profile-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
    navbar.classList.remove('bg-danger');
}

Opena(content,id,name,domain,location,employeesnumber,description) {
  this.idSelected=id;
  this.updateform={ename:name,edomain:domain,elocation:location,employeesnumber:employeesnumber,edescription:description}

  this.modalService.open(content, {ariaLabelledBy: 'modal1-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
 }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

updateEntProfile(){
  this.entprofileService.UpdateEntProfile(this.entId,this.updateform.ename,this.updateform.edomain,this.updateform.elocation,this.updateform.employeesnumber,this.updateform.edescription).subscribe(p => {
    this.toastr.success('Validated with Success!', 'Validation!',
    {timeOut: 3000});;
    console.log(p);
  });

}

Reload(){
  this.eventService.GetEventByEnt(this.entId).subscribe(e => {
    this.events = e;
    console.log(e);
  });
}
deleteEvent(id)
    {
      this.idSelected=id;
      this.eventService.DeleteEvent(id).subscribe(j => {
        this.Reload();
        this.toastr.success('Deleted with Success!', 'Delete!',
        {timeOut: 3000});;
        console.log(j);
       });
    }


checkStatus: boolean;

  public localStorageItem(): boolean {
    if (localStorage.getItem('role') === "Enterprise_Admin" ) {
      return true
    } else {
      return false;
    };
  }
  




}
