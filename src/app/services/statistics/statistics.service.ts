import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';



@Injectable({ providedIn: 'root' })
export class PaymentService {
    constructor(private httpClient: HttpClient) { }

    projectsAdded():Observable<any[]>{
        return this.httpClient.get<any[]>(environment.backend_url+'stat/projectsAdded');
    }
    enterprisesAdded():Observable<any[]>{
        return this.httpClient.get<any[]>(environment.backend_url+'stat/enterprisesAdded');
    }
    condidatsAdded():Observable<any[]>{
        return this.httpClient.get<any[]>(environment.backend_url+'stat/condidatsAdded');
    }
    condidatsRecruted(start:Date,end:Date):Observable<any[]>{
        return this.httpClient.get<any[]>(environment.backend_url+'stat/condidatsRecruted?start='+start+'&end='+end);
    }
    enterpriseMostActif(start:Date,end:Date):Observable<any[]>{
        return this.httpClient.get<any[]>(environment.backend_url+'stat/enterpriseMostActif?start='+start+'&end='+end);
    }

}