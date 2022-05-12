import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from '../model/Event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http:HttpClient) { }
  
  getEvents(){
    return this.http.get<Event[]>('http://localhost:8084/SpringBoot/listerEvent');
   }
  deleteEvent(id:number){
     return this.http.delete('http://localhost:8084/SpringBoot/supprimerEvent/'+id);
   }
   addEvent(data:any){
    return this.http.post('http://localhost:8084/SpringBoot/ajouterEvent/',data);
      }
  updateEvent(data:Event,id:any){
     return this.http.put('http://localhost:8084/SpringBoot/modifierEvent/'+id,data);
   }
   getEventById(id:any){
    return this.http.get<Event>('http://localhost:8084/SpringBoot/get-Event-By-Id/'+id);
  }
}