import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Payement } from './model/payement';
import { User } from '../user-services/model/user';




@Injectable({ providedIn: 'root' })
export class PaymentService  {
    constructor(private httpClient: HttpClient) { }

    addClaim(numCard:string,cvv:number,expirationDate:Date,idPack:number): Observable<Payement> {
        return this.httpClient.put<Payement>(environment.backend_url+ 'payment/add?numCard='+numCard+'&cvv='+cvv+'&expirationDate='+expirationDate+'&idPack='+idPack,null);
     }

     cancelPayment(id:number):Observable<Payement>{
         return this.httpClient.put<Payement>(environment.backend_url+'payment/cancelPayment/'+id,null);
     }
     getUserPayments(id:number):Observable<Payement[]>{
         return this.httpClient.get<Payement[]>(environment.backend_url+'payment/getUPayments/'+id);
     }
     getPaymentAdmin():Observable<Payement[]>{
        return this.httpClient.get<Payement[]>(environment.backend_url+'payment/getPaymentsAdmin');
    }
    cancelPaymentAdmin(id:number):Observable<Payement>{
        return this.httpClient.put<Payement>(environment.backend_url+'payment/cancelPaymentAdmin/'+id,null);
    }
    validatePaymentAdmin(id:number):Observable<Payement>{
        return this.httpClient.put<Payement>(environment.backend_url+'payment/validatePaymentAdmin/'+id,null);
    }
    deletePayment(id:number):Observable<{}>{
        return this.httpClient.delete(environment.backend_url+'payment/deletePayment/'+id);
    }
    getPaymentById(id:number):Observable<Payement>{
        return this.httpClient.get<Payement>(environment.backend_url+'payment/getPaymentById/'+id);
    }
    getUserByPayment(id:number):Observable<User>{
        return this.httpClient.get<User>(environment.backend_url+'payment/getUserByPayment/'+id);
    }

}