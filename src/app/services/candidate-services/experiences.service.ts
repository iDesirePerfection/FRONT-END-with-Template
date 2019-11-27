import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Experience } from './models/experience.model';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ExperiencesService {
    constructor(private httpClient: HttpClient) { }

    getExperiencesByCandidateId(id: string): Observable<Experience[]> {
        // return this.httpClient.get<Experience>(environment.backend_url + 'candidate/getAllExperience?id=' + id).pipe(
        //     map(exp => {
        //         return [exp];
        //     })
        // )
        return this.httpClient.get<Experience[]>(environment.backend_url + 'candidate/getAllExperience?id=' + id);

        // return of([
        //     {
        //         'designation': 'web development'
        //     }
        // ] as Experience[])
    }

    addExperienceToCandidate(designation:string,type:string,startDate:string,endDate:string,candidateId:number): Observable<Experience> {
       return this.httpClient.post<Experience>(environment.backend_url+ 'candidate/addExperience?designation='+designation+'&type='+type+'&startDate='+startDate+'&endDate='+endDate+'&candidateID='+candidateId,null);
    }

    deleteExperience(experienceId:string,candidateId:string) : Observable<{}>
    {
    return this.httpClient.delete(environment.backend_url+ 'candidate/deleteExperience?experienceId='+experienceId+'&candidateId='+candidateId);
    }

}