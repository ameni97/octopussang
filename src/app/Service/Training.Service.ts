import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  constructor(private http:HttpClient) { }
  getTrainings(){
    return this.http.get('http://localhost:8084/SpringBoot/training');
   }
   deleteTraining(id:any){
     return this.http.delete('http://localhost:8084/SpringBoot/training/'+id);
   }
   addTraining(data:any){
 return this.http.post('http://localhost:8084/SpringBoot/training/',data);
   }
   updateTraining(data:any,id:any){
 return this.http.put('http://localhost:8084/SpringBoot/training/'+id,data);
   }
}