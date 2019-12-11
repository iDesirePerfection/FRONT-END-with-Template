
import { Pack } from "app/services/pack-service/models/pack";
import { Payement } from "app/services/Payement/model/payement";
import { User } from "app/services/user-services/models/user";

export interface UserPack{
    id:number;
    user:User;
    pack:Pack;
    daysLeft:number;
    isValid:boolean;
    startDate:Date;
    endDate:Date;
    payment:Payement;
}