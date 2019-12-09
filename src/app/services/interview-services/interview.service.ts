import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'environments/environment';
import { map, catchError } from 'rxjs/operators';
import { Interview } from './models/interview';
import { Quiz } from './models/quiz';

@Injectable({ providedIn: 'root' })
export class InterviewService {
    constructor(private httpClient: HttpClient) { }
    deleteInterview(interviewId: number): Observable<{}> {
        return this.httpClient.delete(environment.backend_url + 'interviews/deleteInterview?id=' + interviewId);
    }
    setDate(id: number, date: string, idC: number, idO: number): Observable<{}> {
        return this.httpClient.put<Interview>(environment.backend_url + 'interviews/setDate?id=' + id + '&date=' + date + '&idC=' + idC + '&idO=' + idO, null);
    }
    setTime(id: number, time: string): Observable<{}> {
        return this.httpClient.put<Interview>(environment.backend_url + 'interviews/setTime?id=' + id + '&time=' + time, null);
    }
    setScore(id: number, score: number): Observable<{}> {
        return this.httpClient.put<Interview>(environment.backend_url + 'interviews/setScore?idI=' + id + '&score=' + score, null);
    }
    chooseWinner(id: number,): Observable<Quiz> {
        return this.httpClient.put<Quiz>(environment.backend_url + 'interviews/chooseWinner?idJo=' + id, null);
    }
}