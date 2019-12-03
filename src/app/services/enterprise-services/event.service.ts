import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'environments/environment';
import { map, catchError } from 'rxjs/operators';
import { Event } from '@angular/router';
import { Participation } from './models/participation';


@Injectable({ providedIn: 'root' })
export class EventService {
    constructor(private httpClient: HttpClient) { }

    GetAllEvent(): Observable<Event[]> {

        return this.httpClient.get<Event[]>(environment.backend_url + 'enterpriseevent/getevent' );
    }

    AddParticipation(eventId:number): Observable<Participation[]>{
        return this.httpClient.post<Participation[]>(environment.backend_url + 'eventparticipation/addparticipation?eventId=' + eventId,null);
    }





}