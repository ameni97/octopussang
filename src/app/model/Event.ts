import { User } from "./User";


export class Event  {
       public idEvent?: number ;
       public evName?: string;
       public place?: string;
       public dateEv?: Date;
       public description?: string;
       public nbPlaces ?: number;
       public nbParticipation?: number;
       public users?: User[];
}