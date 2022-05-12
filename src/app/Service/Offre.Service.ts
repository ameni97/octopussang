import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Offre } from '../model/Offre';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  constructor(private http:HttpClient) { }
  getOffres(){
    return this.http.get<Offre[]>('http://localhost:8084/SpringBoot/Offre/getOffre');
   }
   deleteOffre(id:any){
     return this.http.delete('http://localhost:8084/SpringBoot/Offre/supp-offre/'+id);
   }
   addOffre(data:any){
 return this.http.post('http://localhost:8084/SpringBoot/file/',data);
   }
   updateOffre(data:any,id:any){
 return this.http.put('http://localhost:8084/SpringBoot/Offre/editOffre/'+id,data);
   }
}