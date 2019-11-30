import { User } from "app/services/user-services/models/user";

export interface Claim{
    id:number;
    description:string;
    state:string;
    type:string;
    whoClaim:User;
    claimsOn:User;
    date:Date;
}