import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'environments/environment';
import { map, catchError } from 'rxjs/operators';
import { Quiz } from './models/quiz';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private httpClient: HttpClient) { }
    addQuestion(idC: number, idO: number): Observable<Quiz> {

        return this.httpClient.post<Quiz>(environment.backend_url + 'quiz/addQuiz?idC=' + idC + '&idO=' + idO, null);
    }
    deleteQuiz(quizId: number): Observable<{}> {
        return this.httpClient.delete(environment.backend_url + 'quiz/deleteQuiz?id=' + quizId);
    }
    displayQuiz(id: number): Observable<Quiz[]> {

        return this.httpClient.get<Quiz[]>(environment.backend_url + 'quiz/getQuiz?id=' + id);
    }
    assignQuestion(idQuiz: number, idQuestion: number): Observable<{}> {
        return this.httpClient.put<Quiz>(environment.backend_url + 'quiz/assignQuestion?idQuiz=' + idQuiz + '&idQuestion=' + idQuestion, null);
    }
    setQuizState(idQuiz: number): Observable<{}> {
        return this.httpClient.put<Quiz>(environment.backend_url + 'quiz/setQuizState?id=' + idQuiz, null);
    }
    setInterview(idQuiz: number): Observable<{}> {
        return this.httpClient.put<Quiz>(environment.backend_url + 'quiz/setInterview?id=' + idQuiz, null);
    }
    setScore(idQuiz: number,score:number): Observable<{}> {
        return this.httpClient.put<Quiz>(environment.backend_url + 'quiz/setScore?id=' + idQuiz+'&score='+score, null);
    }
    displayQuizForOffer(id: number): Observable<Quiz[]> {

        return this.httpClient.get<Quiz[]>(environment.backend_url + 'quiz/OfferQuiz?idOffer=' + id);
    }
    validateQuiz(idOffer: number): Observable<{}> {
        return this.httpClient.put<Quiz>(environment.backend_url + 'quiz/validateQuiz?idOffer=' + idOffer, null);
    }
    OfferForFailedCandidate(idQ: number): Observable<{}> {
        return this.httpClient.put<Quiz>(environment.backend_url + 'quiz/moreoffers?idQ=' + idQ, null);
    }
}