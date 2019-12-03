import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Skill } from "./models/skill.model";
import { Observable } from "rxjs";
import { environment } from "environments/environment";

@Injectable({ providedIn: 'root' })
export class SkillService {
    constructor(private httpClient: HttpClient) { }
    addSkillToCandidate(designation:string,rating:number,candidateId:number): Observable<Skill> {
        return this.httpClient.post<Skill>(environment.backend_url+ 'candidate/addSkill?designation='+designation+'&rating='+rating+"&candidateID="+candidateId,null);
     }

     getSkillsByCandidateId(id: string): Observable<Skill[]> {
        return this.httpClient.get<Skill[]>(environment.backend_url + 'candidate/getAllSkill?id=' + id);
     }

     //http://localhost:9080/profesional-network-web/rest/candidate/deleteSkill?skillId=9&candidateId=1

     deleteSkill(skillId:string,candidateId:string) : Observable<{}>
    {
    return this.httpClient.delete(environment.backend_url+ 'candidate/deleteSkill?skillId='+skillId+'&candidateId='+candidateId);
    }
}