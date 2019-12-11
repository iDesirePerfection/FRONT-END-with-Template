import { Component, OnInit } from '@angular/core';
import { Pack } from 'app/services/pack-service/models/pack';
import { PackService } from 'app/services/pack-service/pack.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'app/services/user-services/models/user';
import { UserPack } from 'app/services/UserPack/model/userPack';

import { Payement } from 'app/services/Payement/model/payement';
import { PaymentService } from 'app/services/Payement/payment.service';



@Component({
  selector: 'app-show-pack-details',
  templateUrl: './show-pack-details.component.html',
  styleUrls: ['./show-pack-details.component.scss']
})
export class ShowPackDetailsComponent implements OnInit {

  packId:number;
  pack:Pack;
  tab:boolean=true;
  hide:boolean=true;
  public listUsers:UserPack[];
  public listPayment:Payement[];
  constructor(private packService:PackService,private paymentService:PaymentService ,private activatedroute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedroute.paramMap.subscribe(result => this.packId = Number(result.get('packId')));
    console.log(this.packId+"************");
    this.packService.getPackById(this.packId).subscribe(u=>this.pack=u);
    console.log(this.pack);
    
  }
  afficherUserPack(){
    this.tab= !this.tab;
    this.packService.getUsersPremium(10).subscribe(u=>this.listUsers=u);
    console.log(this.listUsers);
  }
  payment(id:number){
    console.log(id);
    console.log(this.hide);
    this.hide=this.tab1(id);
    console.log(this.hide);
    this.paymentService.getPaymentAdmin().subscribe(u=>this.listPayment=u);
    
    console.log(this.listPayment);
  }
  tab1(id:number):boolean
  {
    console.log(id);
    for(let a of this.listUsers)
    {
      if(a.payment.id==id)
      return false;
    }
    return true;
    }
   
  
}
