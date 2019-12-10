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

    AddParticipation(eventId:number,userid:string): Observable<Participation[]>{
        return this.httpClient.post<Participation[]>(environment.backend_url + 'eventparticipation/addparticipation?eventId=' + eventId+'&userid='+userid,null);
    }

    AddEvent(EEtitle:string,EEplace:string,EESdate:Date,EEEdate:Date,EEdescription:string,EEminparticipants:number,
        EEmaxparticipants:number,EEprice:number,user:string,filename:string): Observable<Event>{
        return this.httpClient.post<Event>(environment.backend_url + 'enterpriseevent/addevent?EEtitle='+EEtitle+'&EEplace='+EEplace+'&EESdate='+EESdate+'&EEEdate='+EEEdate+'&EEdescription='+EEdescription+'&EEminparticipants='+EEminparticipants+'&EEmaxparticipants='+EEmaxparticipants+'&EEprice='+EEprice+'&user='+user+'&file='+filename,null);
    }

    GetEventByEnt(entid:string): Observable<Event[]> {

        return this.httpClient.get<Event[]>(environment.backend_url + 'enterpriseevent/geteventbyent?entid=' + entid );
    }

    
    DeleteEvent(EEid:number) : Observable<{}>
    {
    return this.httpClient.delete(environment.backend_url+ 'enterpriseevent/deleteevent?EEid='+ EEid);
    }

    GetUniquePart(eventId:number,userid:string): Observable<Participation[]> {

        return this.httpClient.get<Participation[]>(environment.backend_url + 'enterpriseevent/geteventbyent?eventId=' + eventId+'&userid='+userid );
    }



}