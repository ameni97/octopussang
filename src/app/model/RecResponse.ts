import { Complaint } from "./Complaint";


export class RecResponse  {
    
    public idRep?: number ;
    public content?: string;
    public pubDate?: Date;
    public complaints?:Complaint[];

}