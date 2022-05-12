import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http:HttpClient) { }
  getEvents(){
    return this.http.get('http://localhost:8084/SpringBoot/listerEvent');
   }
   deleteEvent(id:any){
     return this.http.delete('http://localhost:8084/SpringBoot/event/'+id);
   }
   addEvent(data:any){
 return this.http.post('http://localhost:8084/SpringBoot/test/event/',data);
   }
   updateEvent(data:any,id:any){
 return this.http.put('http://localhost:8084/SpringBoot/event/'+id,data);
   }
}