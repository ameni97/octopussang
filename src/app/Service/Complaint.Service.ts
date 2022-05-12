
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Complaint } from '../model/Complaint';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  constructor(private http:HttpClient) { }
  getComplaint(){
    return this.http.get('http://localhost:8084/SpringBoot/complaint/retrieve-all-Complaints',httpOptions);
   }
   deleteComplaint(id:any){
     return this.http.delete('http://localhost:8084/SpringBoot/complaint/delete-Complain/'+id);
   }
   addComplaint(data:any){
 return this.http.post('http://localhost:8084/SpringBoot/complaint/',data);
   }
   updateComplaint(data:Complaint,id:number){
 return this.http.put('http://localhost:8084/SpringBoot/complaint/modify-Complaint/'+id,data);
   }

   public chatBot(reponse:String){
    return this.http.get('http://localhost:8084/SpringBoot/complaint/ChatBot/'+reponse,{responseType:'text'});
   }

   public changeStat(id:number){
    return this.http.get('http://localhost:8084/SpringBoot/complaint/TraiterReclam/'+id);
   }
}