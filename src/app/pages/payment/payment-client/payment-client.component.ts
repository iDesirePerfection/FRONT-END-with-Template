import { Component, OnInit } from '@angular/core';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from 'app/services/Payement/payment.service';
import { Payement } from 'app/services/Payement/model/payement';
import { PackService } from 'app/services/pack-service/pack.service';
import { UserPack } from 'app/services/UserPack/model/userPack';
import { MOMENT } from 'angular-calendar';

@Component({
  selector: 'app-payment-client',
  templateUrl: './payment-client.component.html',
  styleUrls: ['./payment-client.component.scss']
})
export class PaymentClientComponent implements OnInit {
  id:number;
  public aa=localStorage.getItem('id');
  b:number=Number(this.aa);
  public userPack:UserPack;
  public addform:Payement={numCard:'',cvv:0,cardExpirationDate:null,canceled:false,id:0,userPack:null,validation:false}
  d:Date=new Date;

  constructor(private activatedroute: ActivatedRoute,private paymentService:PaymentService,private packService:PackService) { }

  ngOnInit() {
    this.activatedroute.paramMap.subscribe(result => this.id = Number(result.get('paymentId')));
    console.log(localStorage.getItem('id'));
    console.log(this.b);

  }
  addPayment(){
    this.d=this.addform.cardExpirationDate;
    console.log(this.d);
    console.log(this.addform.cardExpirationDate);
     this.packService.payPack(this.b,this.id).subscribe(u=>u);
    //  this.packService.getUserByPack1(this.id).subscribe(u=>this.userPack=u);
    //  console.log(this.userPack);
    this.paymentService.addClaim(this.addform.numCard,this.addform.cvv,this.d,this.id).subscribe(u=>u);
  }
}
