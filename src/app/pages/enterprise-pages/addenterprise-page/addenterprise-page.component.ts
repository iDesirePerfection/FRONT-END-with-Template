import { Component, OnInit } from '@angular/core';
import { Entprofile } from 'app/services/enterprise-services/models/entprofile';
import { EntprofileService } from 'app/services/enterprise-services/entprofile.sevice';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addenterprise-page',
  templateUrl: './addenterprise-page.component.html',
  styleUrls: ['./addenterprise-page.component.scss']
})
export class AddenterprisePageComponent implements OnInit {


  public addform:Entprofile={ename:'',edomain:'',elocation:'',employeesnumber:null,edescription:''}



  constructor(private entprofileService : EntprofileService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  filename: string = '';
  fileChange(event) {
    this.filename = 'assets/img/' + event;
  }
  getFilename(filename)
  {
    console.log(filename);
  }
  addEnterprise(){
    this.entprofileService.AddEnterprise(localStorage.getItem('id'),this.addform.ename,this.addform.edomain,this.addform.elocation,this.addform.employeesnumber,this.addform.edescription,this.filename).subscribe(e => {
      this.toastr.success('Added with Success!', 'Saving!',
      {timeOut: 3000});;
      console.log(e);
     });
   }




}
