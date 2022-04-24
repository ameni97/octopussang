import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http:HttpClient) { }
  getFiles(){
    return this.http.get('http://localhost:8084/SpringBoot/file');
   }
   deleteFile(id:any){
     return this.http.delete('http://localhost:8084/SpringBoot/file/'+id);
   }
   addFile(data:any){
 return this.http.post('http://localhost:8084/SpringBoot/file/',data);
   }
   updateFile(data:any,id:any){
 return this.http.put('http://localhost:8084/SpringBoot/file/'+id,data);
   }
}