import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Payement } from './model/payement';


@Injectable({ providedIn: 'root' })
export class PaymentService {
    constructor(private httpClient: HttpClient) { }

    addPayment(numCard:number,cvv:number,expirationDate:Date,idPack:number):Observable<Payement>{
        return this.httpClient.post<Payement>(environment.backend_url+'payment/add?numCard='+numCard+'&cvv='+cvv+'&expirationDate='+expirationDate+'&idPack='+idPack,null);
    }
    cancelPayment(idPayment:number):Observable<Payement>
    {
        return this.httpClient.put<Payement>(environment.backend_url+'payment/cancelPayment/'+idPayment,null);
    }

    getUPayments():Observable<Payement[]>{
        return this.httpClient.get<Payement[]>(environment.backend_url+'payment/getUPayments');
    }
    getPaymentAdmin():Observable<Payement[]>{
        return this.httpClient.get<Payement[]>(environment.backend_url+'payment/getPaymentsAdmin');
    
    }
    cancelPaymentAdmin(idPayment:number):Observable<Payement>
    {
        return this.httpClient.put<Payement>(environment.backend_url+'payment/cancelPaymentAdmin/'+idPayment,null);
    }
    validatePaymentAdmin(idPayment:number):Observable<Payement>
    {
        return this.httpClient.put<Payement>(environment.backend_url+'payment/validatePaymentAdmin/'+idPayment,null);
    }
    deltePayment(id:number):Observable<{}>{
        return this.httpClient.delete(environment.backend_url+'payment/deletePayment/'+id);
    }

}