import { Time } from "@angular/common";
import { Abonnement } from "./Abonnement";
import { Role } from "./Role";


export class User  {

       public userId?: number ;
       public email?: string;
       public firstname?: string;
       public lastname?: string;
       public nbPoints?: number;
       public password?: string;
       public userName?: string;
       public birthDate?: Date;
       public active?: boolean;
       public locked?: boolean;
       public enabled?: boolean;
       public deleted?: number;
       public createdAt?: Time;
       public modifiedAt?: Time;
       public deletedAt?: Time;
       public image?: string;
       public warningNum?: number;
       public abonnements?:Abonnement[];
       public roles?:Role[];
       
    
    

}
