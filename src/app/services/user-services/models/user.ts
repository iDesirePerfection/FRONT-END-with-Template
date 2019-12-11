import { Entprofile } from "app/services/enterprise-services/models/entprofile";
import { UserPack } from "app/services/UserPack/model/userPack";

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
    enterprise:Entprofile;
    Posts:any[];
    Reactions:any[];
    Messages:any[];
    Notifications:any[];
    Followers:any[];
    Blcaklist:any[];
    Whoclaim:any[];
    claimOn:any[];
    packs:UserPack[];

    //candidate de plus 
    biography?: string;
    title?:string;
    rating?: number;
    cv?: string;
    imageUrl?:string;
    experiences?: any[];
    certifications?: any[];
    activities?: any[];
    skills?: any[];
    contacts?: any[];
    views?: any[];
    subscriptions?: any[];
    jobApplications?: any[];
    

}