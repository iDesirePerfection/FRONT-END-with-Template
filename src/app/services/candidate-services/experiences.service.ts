import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Experience } from './models/experience.model';
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

    addExperienceToCandidate(designation:string,type:string,startDate:any,endDate:any,candidateId:number): Observable<Experience> {
       return this.httpClient.post<Experience>(environment.backend_url+ 'candidate/addExperience?designation='+designation+'&type='+type+'&startDate='+this.convertDateToString(startDate)+'&endDate='+this.convertDateToString(endDate)+'&candidateID='+candidateId,null);
    }
    updateExperience(candidateId:number,designation:string,type:string,startDate:any,endDate:any): Observable<Experience> {
        return this.httpClient.put<Experience>(environment.backend_url+ 'candidate/updateExperience?id='+candidateId+'&designation='+designation+'&type='+type+'&startDate='+this.convertDateToString(startDate)+'&endDate='+this.convertDateToString(endDate),null);
     }
    

    deleteExperience(experienceId:string,candidateId:string) : Observable<{}>
    {
    return this.httpClient.delete(environment.backend_url+ 'candidate/deleteExperience?experienceId='+experienceId+'&candidateId='+candidateId);
    }

    convertDateToString(d:any)
    {
        var toReturn:string;
        toReturn=d.year.toString();
        toReturn=toReturn.concat("-");
        toReturn=toReturn.concat(d.month.toString());
        toReturn=toReturn.concat("-");
        toReturn=toReturn.concat(d.day.toString());
        console.log(toReturn);
        return toReturn;
    }
}