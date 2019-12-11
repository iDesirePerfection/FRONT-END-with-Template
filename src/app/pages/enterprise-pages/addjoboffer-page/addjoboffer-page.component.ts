import { Component, OnInit } from '@angular/core';
import { JobofferService } from 'app/services/enterprise-services/joboffer.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Joboffer } from 'app/services/enterprise-services/models/joboffer';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addjoboffer-page',
  templateUrl: './addjoboffer-page.component.html',
  styleUrls: ['./addjoboffer-page.component.scss']
})
export class AddjobofferPageComponent implements OnInit {
  joboffer:Joboffer[]=[];
  

  public addform:Joboffer={JOtitle:'',JOarea:'',JOdescription:'',JOexperience:null,interests:''}

  constructor(private jobofferService:JobofferService,private modalService: NgbModal, private toastr: ToastrService) { }

  ngOnInit() {
  }

  addJoboffer(){
    console.log(this.addform.interests);
    this.jobofferService.AddJoboffer(localStorage.getItem('entid'),this.addform.JOtitle,this.addform.JOarea,this.addform.JOdescription,this.addform.JOexperience,this.addform.interests.toString()).subscribe(j => {
      this.toastr.success('Added with Success!', 'Saving!',
      {timeOut: 3000});;
      console.log(j);
     });
   }


}
