import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Pack } from './model/pack';
import { ThrowStmt } from '@angular/compiler';


@Injectable({ providedIn: 'root' })
export class PackService {
    constructor(private httpClient: HttpClient) { }
    getAllPacks(): Observable<Pack[]> {
        return this.httpClient.get<Pack[]>(environment.backend_url + 'pack/allPacks');
    }
    getUsersByPack(idPack: number): Observable<string[]> {
        return this.httpClient.get<string[]>(environment.backend_url + 'pack/user/'+idPack);
    }
    getUsersPremium():Observable<string[]>{
        return this.httpClient.get<string[]>(environment.backend_url+'pack/user');
    }
    addPack(titre:string,description:string,prix:number,type:string):Observable<Pack>{
        return this.httpClient.post<Pack>(environment.backend_url +'pack/addPack?titre='+titre+'&description='+description+'&prix='+prix+'&type'+type ,null)
    }

    addReduction(id:number,reduction:number,dateDebut:Date,dateFin:Date):Observable<Pack>
    {
        return this.httpClient.put<Pack>(environment.backend_url + 'pack/addReduction/'+id+'?reduction='+reduction+'&dateDebut='+dateDebut+'&dateFin='+dateFin,null);
    }
    deletePack(id:number):Observable<{}>{
        return this.httpClient.delete(environment.backend_url+'pack/deletePack?id='+id);
    }
    payPack(id:number):Observable<Pack>{
        return this.httpClient.put<Pack>(environment.backend_url+'pack/payPack/'+id,null);
    }
    
}