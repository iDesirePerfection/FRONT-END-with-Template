import { User } from "app/services/user-services/models/user";


export interface Pack{
    id:number;
    price:number;
    description:string;
    title:string;
    type:string;
    startDate:Date;
    endDate:Date;
    reduction:number;
    users:User[];
}