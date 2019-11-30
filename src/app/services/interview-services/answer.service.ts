import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'environments/environment';
import { map, catchError } from 'rxjs/operators';
import { Answer } from './models/answer';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private httpClient: HttpClient) { }
    addAnswer(answer: string): Observable<Answer> {

        return this.httpClient.post<Answer>(environment.backend_url + 'anwsers/addAnswer?answer=' +answer,null);
    }
    deleteExperience(id:number) : Observable<{}>
    {
    return this.httpClient.delete(environment.backend_url+ 'anwsers/deleteAnswer?id='+id);
    }
    getExperiencesByCandidateId(id: number): Observable<Answer[]> {

        return this.httpClient.get<Answer[]>(environment.backend_url + 'anwsers/getAnswer?id=' + id);
    }
    setCorrect(id:number): Observable<{}>
    {
        return this.httpClient.put<Answer>(environment.backend_url + 'anwsers/setCorrect?id=' +id,null);
    }
    updateAnswer(id:number,answer:string): Observable<{}>
    {
        return this.httpClient.put<Answer>(environment.backend_url + 'anwsers/setCorrect?id=' +id+'&answer='+answer,null);
    }
}