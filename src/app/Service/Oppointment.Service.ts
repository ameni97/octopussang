
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class OppointmentService {

  constructor(private http:HttpClient) { }
  getOppointment(){
    return this.http.get('http://localhost:8084/SpringBoot/Oppointment/retrieve-all-Oppointment',httpOptions);
   }
   deleteOppointment(id:any){
     return this.http.delete('http://localhost:8084/SpringBoot/Oppointment/delete-Oppointment/'+id);
   }
   addOppointment(data:any){
 return this.http.post('http://localhost:8084/SpringBoot/complaint/',data);
   }
   updateOppointment(data:any,id:any){
 return this.http.put('http://localhost:8084/SpringBoot/Oppointment/modify-Oppointment'+id,data);
   }

   public chatBot(reponse:String){
    return this.http.get('http://localhost:8084/SpringBoot/complaint/ChatBot/'+reponse,{responseType:'text'});
   }
}