import { User } from "./User";


export class Certificat  {
    
       public idCertif?: number ;
       public qrCertif?: string;
       public titre?: string;
       public date?: Date;
       public cachet?: string;
       public users?:User[];
    
    

}