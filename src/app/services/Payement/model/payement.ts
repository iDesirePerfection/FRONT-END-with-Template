export interface Payement{
    id:number;
    numCard:number;
    cvv:number;
    cardExpirationDate:Date;
    validation:boolean;
    canceled:boolean;
    userPack:any[];
}