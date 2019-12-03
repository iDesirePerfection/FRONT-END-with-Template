import { Component, OnInit } from '@angular/core';
import { JobofferService } from 'app/services/enterprise-services/joboffer.service';
import { Joboffer } from 'app/services/enterprise-services/models/joboffer';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-myjobofferlist-page',
  templateUrl: './myjobofferlist-page.component.html',
  styleUrls: ['./myjobofferlist-page.component.scss']
})
export class MyjobofferlistPageComponent implements OnInit {

  myjoboffers:Joboffer[]=[];
  closeResult;
  idSelected;
  

  public updateform:Joboffer={JOtitle:'',JOarea:'',JOdescription:'',JOexperience:null,interests:''}


  constructor(private jobofferService:JobofferService,private modalService: NgbModal) { }

  ngOnInit() {

    this.jobofferService.GetJobofferByEnt(localStorage.getItem('entid')).subscribe(jo => {
      this.myjoboffers = jo;
      console.log(jo);
    });
  }


  Opena(content,id,title,area,description,experience,interests) {
    this.idSelected=id;
    console.log(id);
    console.log(title);
    this.updateform={JOtitle:title,JOarea:area,JOdescription:description,JOexperience:experience,interests:interests}
  
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


    updateJoboffer(){
     this.jobofferService.UpdateJoboffer(this.idSelected,this.updateform.JOtitle,this.updateform.JOarea,this.updateform.JOdescription,this.updateform.JOexperience,this.updateform.interests).subscribe(j => {
       console.log(j);
      });
    }








}
