import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  constructor(private http:HttpClient) { }
  getMaterials(){
    return this.http.get('http://localhost:8084/SpringBoot/material');
   }
   deleteMaterial(id:any){
     return this.http.delete('http://localhost:8084/SpringBoot/material/'+id);
   }
   addMaterial(data:any){
 return this.http.post('http://localhost:8084/SpringBoot/material/',data);
   }
   updateMaterial(data:any,id:any){
 return this.http.put('http://localhost:8084/SpringBoot/material/'+id,data);
   }
}