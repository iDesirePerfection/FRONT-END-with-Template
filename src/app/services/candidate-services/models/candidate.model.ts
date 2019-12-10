import { Address } from "./address.model";
import { Entprofile } from "app/services/enterprise-services/models/entprofile";


export interface Candidate {
    id?: number;
    email?: string;
    firstName?: string;
    lastName?: string;
    password?: string;
    receiveMailNotifs?: boolean;
    gender?: string;
    birthDate?: Date;
    enable?: boolean;
    confirm?: string;
    address?: Address;
    username?: string;
    token?: string;
    role?: string;
    interests?: string;
    accountCreationDate?: boolean;
    enterprise?: any;
    claimOn?: any[];
    biography?: string;
    title?:string;
    rating?: number;
    cv?: string;
    imageUrl?:string;
    experiences?: any[];
    certifications?: any[];
    activities?: any[];
    skills?: any[];
    contacts?: Candidate[];
    views?: any[];
    subscriptions?: Entprofile[];
    jobApplications?: any[];
    quizs?: any[];
    notifications?: any[];
    messages?: any[];
    whoclaim?: any[];
    reactions?: any[];
    comments?: any[];
    follow?:string;
    subscribe?:string;


}