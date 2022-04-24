import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http:HttpClient) { }
  getNotifications(){
    return this.http.get('http://localhost:8084/SpringBoot/notification');
   }
   deleteNotification(id:any){
     return this.http.delete('http://localhost:8084/SpringBoot/notification/'+id);
   }
   addNotification(data:any){
 return this.http.post('http://localhost:8084/SpringBoot/notification/',data);
   }
   updateNotification(data:any,id:any){
 return this.http.put('http://localhost:8084/SpringBoot/notification/'+id,data);
   }
}