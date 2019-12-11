import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Pack } from './models/pack';
import { ThrowStmt } from '@angular/compiler';
import { User } from '../user-services/models/user';
import { UserPack } from '../UserPack/model/userPack';


@Injectable({ providedIn: 'root' })
export class PackService {
    constructor(private httpClient: HttpClient) { }
    getAllPacks(): Observable<Pack[]> {
        return this.httpClient.get<Pack[]>(environment.backend_url + 'pack/allPacks');
    }
    getUsersByPack(idPack: number): Observable<UserPack[]> {
        return this.httpClient.get<UserPack[]>(environment.backend_url + 'pack/user/'+idPack);
    }
    getUsersPremium(id:number):Observable<UserPack[]>{
        return this.httpClient.get<UserPack[]>(environment.backend_url+'pack/userByPack/'+id);
    }
    
    addPack(titre:string,description:string,prix:number,type:string):Observable<Pack>{
        return this.httpClient.post<Pack>(environment.backend_url +'pack/addPack?titre='+titre+'&description='+description+'&prix='+prix+'&type'+type ,null)
    }

    addReduction(id:number,reduction:number,dateDebut:Date,dateFin:Date):Observable<Pack>
    {
        return this.httpClient.put<Pack>(environment.backend_url +'pack/addReduction/'+id+'?reduction='+reduction+'&dateDebut=2019-10-30&dateFin=2019-11-10',null);
    }
    deletePack(id:number):Observable<string>{
        return this.httpClient.delete<string>(environment.backend_url+'pack/deletePack?id='+id);
    }
    payPack(idU:number,idp:number):Observable<Pack>{
        return this.httpClient.put<Pack>(environment.backend_url+'pack/payPack/'+idU+'/'+idp,null);
    }
    getPackById(id:number):Observable<Pack>{
        return this.httpClient.get<Pack>(environment.backend_url+'pack/pack/'+id);
    }
    getUserByPack1(id:number):Observable<UserPack>{
        return this.httpClient.get<UserPack>(environment.backend_url+'pack/userByPack1/'+id);
    }
    
}