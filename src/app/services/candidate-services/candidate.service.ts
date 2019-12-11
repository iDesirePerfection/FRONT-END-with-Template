import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Candidate } from "./models/candidate.model";
import { Observable } from "rxjs";
import { environment } from "environments/environment";
import { User } from "../user-services/models/user";
import { Joboffer } from "../enterprise-services/models/joboffer";
import { Training } from "./models/training.model";

@Injectable({ providedIn: 'root' })
export class CandidateService  {
    constructor(private httpClient: HttpClient) { }

    getCandidateById(id: string): Observable<Candidate>
    {
        return this.httpClient.get<Candidate>(environment.backend_url + 'candidate/getCandidateById?id=' + id);
    }

    getFriendsList(id: string): Observable<Candidate[]> {
        return this.httpClient.get<Candidate[]>(environment.backend_url + 'contact/getFriendsList?candidateId=' + id);
    }
    getCandidateList(id: string): Observable<Candidate[]> {
        return this.httpClient.get<Candidate[]>(environment.backend_url + 'candidate/getCandidates?id=' + id);
    }
    getOffers(): Observable<Joboffer[]> {
        return this.httpClient.get<Joboffer[]>(environment.backend_url + 'contact/getOffers');
    }
    getOfferById(id:string): Observable<Joboffer> {
        return this.httpClient.get<Joboffer>(environment.backend_url + 'joboffer/getjobofferbyid?JOid='+id);
    }
    updateBasicCandidate(candidateId:number,firstName:string,lastName:string,title:string,bio:string): Observable<User> {
        return this.httpClient.put<User>(environment.backend_url+ 'candidate/updateBasicCandidate?id='+candidateId+'&firstName='+firstName+'&lastName='+lastName+'&title='+title+'&bio='+bio,null);
     }

     followCandidate(followerId: string,followedId:string): Observable<Candidate>
     {
         return this.httpClient.post<Candidate>(environment.backend_url + 'contact/followContact?follower=' + followerId+"&followed="+followedId,null);
     }
     unfollowCandidate(followerId: string,followedId:string): Observable<Candidate>
     {
         return this.httpClient.delete<Candidate>(environment.backend_url + 'contact/unfollowContact?follower=' + followerId+"&followed="+followedId);
     }

     subscribeToEnterprise(candidateId: string,enterpriseId:string): Observable<Candidate>
     {
         return this.httpClient.post<Candidate>(environment.backend_url + 'contact/subscribe?candidateId=' + candidateId+"&enterpriseId="+enterpriseId,null);
     }

     unsubscribeFromEnterprise(candidateId: string,enterpriseId:string): Observable<Candidate>
     {
         return this.httpClient.delete<Candidate>(environment.backend_url + 'contact/unsubscribe?candidateId=' + candidateId+"&enterpriseId="+enterpriseId);
     }

     applyForAJob(candidateId: string,jobId:string): Observable<Candidate>
     {
         return this.httpClient.post<Candidate>(environment.backend_url + 'job/applyForAJob?candidateId=' + candidateId+"&jobId="+jobId,null);
     }

     cancelApplication(candidateId: string,jobApplicationId:string): Observable<Candidate>
     {
         console.log('job/cancelApplication?jobApplicationId=' + jobApplicationId+"&candidateId="+candidateId);
         return this.httpClient.delete<Candidate>(environment.backend_url + 'job/cancelApplication?jobApplicationId=' + jobApplicationId+"&candidateId="+candidateId);
     }

     getTraining(): Observable<Training[]> {
        return this.httpClient.get<Training[]>(environment.backend_url + 'training/getTraining');
    }

    addNewEvent(designation: string,date:Date,candidateId:string): Observable<any>
    {
        return this.httpClient.post<any>(environment.backend_url + 'candidate/addActivity?designation=' + designation+"&Date="+this.convertDateToString(date)+"&candidateID="+candidateId,null);
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