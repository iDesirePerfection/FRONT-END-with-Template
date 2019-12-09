import { Component, OnInit } from '@angular/core';
import { JobofferService } from 'app/services/enterprise-services/joboffer.service';
import { Joboffer } from 'app/services/enterprise-services/models/joboffer';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-myjobofferlist-page',
  templateUrl: './myjobofferlist-page.component.html',
  styleUrls: ['./myjobofferlist-page.component.scss']
})
export class MyjobofferlistPageComponent implements OnInit {

  myjoboffers:Joboffer[]=[];
  closeResult;
  idSelected;
  searchText;
  

  public updateform:Joboffer={JOtitle:'',JOarea:'',JOdescription:'',JOexperience:null,interests:''}


  constructor(private jobofferService:JobofferService,private modalService: NgbModal, private toastr: ToastrService) { }

  ngOnInit() {

    this.jobofferService.GetJobofferByEnt(localStorage.getItem('entid')).subscribe(jo => {
      this.myjoboffers = jo;
      console.log(jo);
    });
  }

  Reload() {

    this.jobofferService.GetJobofferByEnt(localStorage.getItem('entid')).subscribe(jo => {
      this.myjoboffers = jo;
      console.log(jo);
    });
  }

  //Update popup
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
      this.toastr.success('Updated with Success!', 'Update!',
      {timeOut: 3000});;  
      console.log(j);
      });
    }



//delete popup
OpenDelete(content,id) {
  this.idSelected=id;
  console.log(id);
  this.modalService.open(content, {ariaLabelledBy: 'modal1-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
 }
 

    deleteJoboffer()
    {
      this.jobofferService.DeleteJoboffer(this.idSelected).subscribe(j => {
        this.Reload();
        this.toastr.success('Deleted with Success!', 'Delete!',
        {timeOut: 3000});;
        console.log(j);
       });
    }
  

    validateJoboffer(id){
      this.idSelected=id;
      this.jobofferService.ValidateJoboffer(id).subscribe(j => {
        this.Reload();
        this.toastr.success('Validated with Success!', 'Validation!',
        {timeOut: 3000});;
        console.log(j);
       });

    }

    





}
