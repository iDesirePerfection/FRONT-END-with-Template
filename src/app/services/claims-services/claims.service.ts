import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Claim } from './model/claim';



@Injectable({ providedIn: 'root' })
export class ClaimsService {
    constructor(private httpClient: HttpClient) { }
    addClaim(description:string,type:string,whoClaim:number,claimsOn:number): Observable<Claim> {
        return this.httpClient.post<Claim>(environment.backend_url+ 'claim/addClaim?description='+description+'&type='+type+'&whoClaim='+whoClaim+'&claimsOn='+claimsOn,null);
     }
     
     getAllClaims(): Observable<Claim[]> {
        return this.httpClient.get<Claim[]>(environment.backend_url + 'claim/allClaims');
    }
    getTreatedClaims(): Observable<Claim[]> {
        return this.httpClient.get<Claim[]>(environment.backend_url + 'claim/treatedClaims');
    }
    getIntreatedClaims(): Observable<Claim[]> {
        return this.httpClient.get<Claim[]>(environment.backend_url + 'claim/untreatedClaims');
    } 
    getInProgressClaims(): Observable<Claim[]> {
        return this.httpClient.get<Claim[]>(environment.backend_url + 'claim/inProgressClaims');
    }
    
     treateClaim(claimId:number,etat:string) : Observable<Claim>{
        return this.httpClient.put<Claim>(environment.backend_url+ 'claim/deleteClaim/id='+claimId+'?etat='+etat,null);
     }
     deleteClaim(claimId:number) : Observable<{}>
     {
     return this.httpClient.delete(environment.backend_url+ 'claim/deleteClaim?id='+claimId);
     }
    

}