import { Expert } from "./Expert";
import { User } from "./User";

export class Oppointment  {
    
    public idOp?: number ;
    public opDate?: Date;
    public users?:User[];
    public experts?:Expert[];
}