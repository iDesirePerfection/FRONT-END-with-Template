export interface User{
    id:number;
    email:string;
    firstName:string
    lastName:string;
    password:string;
    recieveMailNotifs:boolean;
    gender:string;
    birthDate:Date;
    enable:boolean;
    confirm:string;
    address:any;
    username:string;
    token:string;
    role:string;
    interests:string;
    accountCreationDate:Date;
    // TODO:change any to their types
    entreprise:any;
    Posts:any[];
    Reactions:any[];
    Messages:any[];
    Notifications:any[];
    Followers:any[];
    Blcaklist:any[];
    Whoclaim:any[];
    claimOn:any[];
    packs:any[];
    

}