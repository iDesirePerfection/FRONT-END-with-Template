import { UserPack } from "app/services/UserPack/model/userPack";

export interface Payement{
    id:number;
    numCard:string;
    cvv:number;
    cardExpirationDate:Date;
    canceled:boolean;
    validation:boolean;
    userPack:UserPack;
}