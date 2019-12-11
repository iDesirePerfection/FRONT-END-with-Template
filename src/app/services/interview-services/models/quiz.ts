import { Interview } from "./interview";
import { Question } from "./question";

export interface Quiz{
    id:number;
    score:number;
    state:string;
    questions:Question[];
    candidate:any[];
    jobOffer:any[];
    interview:Interview;
}