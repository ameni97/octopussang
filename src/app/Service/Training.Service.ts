import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Training } from '../model/Training';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  constructor(private http:HttpClient) { }
  getTrainings(){
    return this.http.get<Training[]>('http://localhost:8084/SpringBoot/retrieve-all-Trainings');
   }
   deleteTraining(id:any){
     return this.http.delete('http://localhost:8084/SpringBoot/remove-Training/'+id);
   }
   addTraining(data:any){
 return this.http.post('http://localhost:8084/SpringBoot/add-Training/',data);
   }
   updateTraining(data:Training,id:number){
 return this.http.put('http://localhost:8084/SpringBoot/modify-Training/'+id,data);
   }
   participateTraining(id:number, idtrain:number){
     const url = 'http://localhost:8084/SpringBoot/participer-a-formation/'+id+'/'+idtrain;
  return this.http.put(url,{});
   }
   searchTrainings(val:string){
    return this.http.get<Training[]>('http://localhost:8084/SpringBoot/search-Trainings/'+val);
   }
   getTrainingById(idtrain:any){
     return this.http.get<Training>('http://localhost:8084/SpringBoot/get-Training-By-Id/'+idtrain);
   }
   getFiles(idtrain:any,id:number){
    const url = 'http://localhost:8084/SpringBoot/get-Files/'+id+'/'+idtrain;
    return this.http.get<File[]>(url);
  }
}