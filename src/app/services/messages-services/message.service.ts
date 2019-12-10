import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Message } from './models/message.model';
import { environment } from 'environments/environment';
import { map, catchError } from 'rxjs/operators';
import { post } from 'selenium-webdriver/http';

@Injectable({ providedIn: 'root' })
export class NotificationService {
    interval:number=0;

    constructor(private httpClient: HttpClient) { }

    myMessages(): Observable<any> {
       return this.httpClient.get<Message[]>(environment.backend_url + 'message/mymessages');
    }


    sendMessage(to:number,content:string): Observable<Message> {
       return this.httpClient.post<Message>(environment.backend_url + 'message/send?to=' + to + '&content=' + content, null);
    }

   setSeen(id:number): Observable<{}>
    {
    return this.httpClient.delete(environment.backend_url + 'notifs/delete?id='+ id);
    }

}
