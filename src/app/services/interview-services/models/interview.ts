import { Time } from "@angular/common";

export interface Interview{
    id:number;
    date:Date;
    time:Time;
    score:number;
    state:string;
}