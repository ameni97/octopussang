
import { User } from "./User";

export class Complaint  {
    
    public idC?: number ;
    public objet?: string;
    public textC?: string;
    public sendDate?: Date;
    public statReclamation?: string;
    public users?:User[];
    
}