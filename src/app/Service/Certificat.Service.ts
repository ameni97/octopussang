import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CertificatService {

  constructor(private http:HttpClient) { }
  getCertificats(){
    return this.http.get('http://localhost:8084/SpringBoot/certificat');
   }
   deleteCertificat(id:any){
     return this.http.delete('http://localhost:8084/SpringBoot/certificat/'+id);
   }
   addCertificat(data:any){
 return this.http.post('http://localhost:8084/SpringBoot/certificat/',data);
   }
   updateCertificat(data:any,id:any){
 return this.http.put('http://localhost:8084/SpringBoot/certificat/'+id,data);
   }
}