import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'environments/environment';
import { map, catchError } from 'rxjs/operators';
import { Entprofile } from './models/entprofile';


@Injectable({ providedIn: 'root' })
export class EntprofileService {
    constructor(private httpClient: HttpClient) { }

    GetAllEnt(): Observable<Entprofile[]> {

        return this.httpClient.get<Entprofile[]>(environment.backend_url + 'enterprise/getallent' );
    }

    GetEnterpriseById(Eid:number): Observable<Entprofile[]> {

        return this.httpClient.get<Entprofile[]>(environment.backend_url + 'enterprise/getentbyid?Eid=' + Eid );
    }



    UpdateEntProfile(Eid:number,Ename:string,Edomain:string,Elocation:string,Employeesnumber:number,Edescription:string): Observable<Entprofile> {
        return this.httpClient.put<Entprofile>(environment.backend_url+ 'enterprise/updateenterprise?Eid='+Eid+'&Ename='+Ename+'&Edomain='+Edomain+'&Elocation='+Elocation+'&Employeesnumber='+Employeesnumber+'&Edescription='+Edescription,null);
     }






}