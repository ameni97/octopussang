import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http:HttpClient) { }
  getQuiz(){
    return this.http.get('http://localhost:8084/SpringBoot/retrieve-all-Quizs');
   }
   deleteQuiz(id:any){
     return this.http.delete('http://localhost:8084/SpringBoot/quiz/'+id);
   }
   addQuiz(data:any){
 return this.http.post('http://localhost:8084/SpringBoot/quiz/',data);
   }
   updateQuiz(data:any,id:any){
 return this.http.put('http://localhost:8084/SpringBoot/quiz/'+id,data);
   }
}