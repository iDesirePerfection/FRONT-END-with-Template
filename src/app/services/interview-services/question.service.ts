import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'environments/environment';
import { map, catchError } from 'rxjs/operators';
import { Question } from './models/question';

@Injectable({ providedIn: 'root' })
export class QuestionService {
    constructor(private httpClient: HttpClient) { }
    addQuestion(question: string): Observable<Question> {

        return this.httpClient.post<Question>(environment.backend_url + 'questions/addQuestion?question=' + question, null);
    }
    deleteQuestion(questionId: number): Observable<{}> {
        return this.httpClient.delete(environment.backend_url + 'questions/deleteQuestion?id=' + questionId);
    }
    displayQuestion(id: number): Observable<Question[]> {

        return this.httpClient.get<Question[]>(environment.backend_url + 'questions/displayQuestion?id=' + id);
    }
    assignAnswer(idQ: number, idA: number): Observable<{}> {
        return this.httpClient.put<Question>(environment.backend_url + 'questions/assignAnswer?idQ=' + idQ + '&idA=' + idA, null);
    }
}