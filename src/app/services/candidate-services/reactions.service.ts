import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Reaction } from './models/reaction.model';
import { environment } from "environments/environment";
import { map, catchError } from 'rxjs/operators';
import { post } from 'selenium-webdriver/http';

@Injectable({ providedIn: 'root' })
export class ReactionsService {

    constructor(private httpClient: HttpClient) { }


    addReaction(idpost: number , type: string): Observable<Reaction> {
       return this.httpClient.post<Reaction>(environment.backend_url + 'reaction/add?post=' + idpost + '&type=' + type,null);
    }

    alreadyLiked(idpost: number): Observable<any> {
       return this.httpClient.get<any[]>(environment.backend_url + 'reaction/liked?post=' + idpost);
    }

    deleteReaction(id:number): Observable<{}>
    {
        console.log(environment.backend_url + 'reaction/delete?id=' + id);
    return this.httpClient.delete(environment.backend_url + 'reaction/delete?id=' + id);
    }

}
