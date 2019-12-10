import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'app/services/Payement/payment.service';
import { ActivatedRoute } from '@angular/router';
import { Payement } from 'app/services/Payement/model/payement';
import { User } from 'app/services/user-services/model/user';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-payment-admin',
  templateUrl: './payment-admin.component.html',
  styleUrls: ['./payment-admin.component.scss']
})
export class PaymentAdminComponent implements OnInit {
  paymentId;
  public payment:Payement ;
  public validation:string="non validé";
  public user:User;
  public tab:boolean=true;
  closeResult;
  constructor(private paymentService:PaymentService ,private activatedroute: ActivatedRoute,private modalService: NgbModal) { }

  ngOnInit() {
    
    this.activatedroute.paramMap.subscribe(result => this.paymentId = Number(result.get('paymentId')));
    console.log(this.paymentId);
    this.paymentService.getPaymentById(this.paymentId).subscribe(u=>this.payment=u);
    
    this.paymentService.getUserByPayment(this.paymentId).subscribe(u=>this.user=u);
   
    
  }
  validerPayment(){
    this.validation="validé";
    this.paymentService.validatePaymentAdmin(this.paymentId).subscribe(u=>u);
    this.paymentService.getPaymentById(this.paymentId).subscribe(u=>this.payment=u);
    
  }
  getUser(content,type){
    this.tab= !this.tab;
    
    
    if (type === 'sm') {
        console.log('aici');
        this.modalService.open(content, { size: 'sm' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    } else {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
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
}
