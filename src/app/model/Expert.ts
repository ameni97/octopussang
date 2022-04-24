import { OpenDirOptions } from "fs";
import { Oppointment } from "./Oppointment";

export class Expert  {
    
    public id?: number ;
    public nom?: string;
    public expertType?: string;
    public oppointments?:Oppointment[];

}