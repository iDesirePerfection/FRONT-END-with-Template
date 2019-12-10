import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Notification } from './models/notification.model';
import { environment } from "environments/environment";
import { map, catchError } from 'rxjs/operators';
import { post } from 'selenium-webdriver/http';

@Injectable({ providedIn: 'root' })
export class NotificationService {
    interval:number=0;

    constructor(private httpClient: HttpClient) { }

    myNotifs(): Observable<any> {
       return this.httpClient.get<Notification[]>(environment.backend_url + 'notifs/mynotifs');
    }

   setSeen(id:number): Observable<{}>
    {
    return this.httpClient.delete(environment.backend_url + 'notifs/delete?id='+ id);
    }

}
