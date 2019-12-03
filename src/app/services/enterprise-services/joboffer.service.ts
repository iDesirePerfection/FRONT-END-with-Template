import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'environments/environment';
import { map, catchError } from 'rxjs/operators';
import { Joboffer } from './models/joboffer';


@Injectable({ providedIn: 'root' })
export class JobofferService {
    constructor(private httpClient: HttpClient) { }

    GetAllJoboffer(): Observable<Joboffer[]> {

        return this.httpClient.get<Joboffer[]>(environment.backend_url + 'joboffer/getjoboffer' );
    }

    GetJobofferByVues() :Observable<Joboffer[]> {

        return this.httpClient.get<Joboffer[]>(environment.backend_url + 'joboffer/getjobofferorderbyvues' );
    }

    GetJobofferByEnt(entid:string) :Observable<Joboffer[]> {

        return this.httpClient.get<Joboffer[]>(environment.backend_url + 'joboffer/getjobofferbyent?entid=' + entid );
    }

    UpdateJoboffer(JOid:string,JOtitle:string,JOarea:string,JOdescription:string,JOexperience:number,interests:string) :Observable<Joboffer> {

        return this.httpClient.put<Joboffer>(environment.backend_url + 'joboffer/updatejoboffer?JOid='+JOid+'&JOtitle='+JOtitle+'&JOarea='+JOarea+'&JOdescription='+JOdescription+'&JOexperience='+JOexperience+'&interests='+interests,null );
    }


}