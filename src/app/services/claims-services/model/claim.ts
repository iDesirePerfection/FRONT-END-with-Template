import { User } from "app/services/user-services/models/user";

export interface Claim{
    description:string;
    state?:string;
    type:string;
    date?:Date;
    whoClaim:User;
    claimsOn?:User;
}