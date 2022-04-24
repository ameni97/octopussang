import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }
  getQuestions(){
    return this.http.get('http://localhost:8084/SpringBoot/question');
   }
   deleteQuestion(id:any){
     return this.http.delete('http://localhost:8084/SpringBoot/question/'+id);
   }
   addQuestion(data:any){
 return this.http.post('http://localhost:8084/SpringBoot/question/',data);
   }
   updateQuestion(data:any,id:any){
 return this.http.put('http://localhost:8084/SpringBoot/question/'+id,data);
   }
}