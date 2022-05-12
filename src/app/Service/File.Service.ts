import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { File } from '../model/File';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http:HttpClient) { }
  getFilesBy(id:any){
    return this.http.get<File[]>('http://localhost:8084/SpringBoot/getFilesById/'+id);
   }
   getFiles(){
    return this.http.get<File[]>('http://localhost:8084/SpringBoot/getFiles');
   }
  deleteFile(id:any){
     return this.http.delete('http://localhost:8084/SpringBoot/remove-file/'+id);
   }
   uploadFile(data:File){
 return this.http.post('http://localhost:8084/SpringBoot/uploadFile',data);
   }
  public downloadFile(id:any){
    return this.http.get('http://localhost:8084/SpringBoot/downloadFile/'+id);
  }
}