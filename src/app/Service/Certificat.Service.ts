import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Certificat } from '../model/Certificat';

@Injectable({
  providedIn: 'root'
})
export class CertificatService {

  constructor(private http:HttpClient) { }
  getCertificats(){
    return this.http.get<Certificat[]>('http://localhost:8084/SpringBoot/retrieve-all-Certificats');
   }
   deleteCertificat(id:any){
     return this.http.delete('http://localhost:8084/SpringBoot/remove-Certificat/'+id);
   }
   addCertificat(data:any, id:any){
 return this.http.post('http://localhost:8084/SpringBoot/add-Certificat/'+id,data);
   }
   updateCertificat(data:any,id:any){
 return this.http.put('http://localhost:8084/SpringBoot/modify-Certificat/'+id,data);
   }
   generateQrcertif(id:any){
     return this.http.get('http://localhost:8084/SpringBoot/genrateQRCode/'+id);
   }
   downloadPDF(id:number){
     return this.http.get("http://localhost:8084/SpringBoot/genpdf/"+id)
   }
   getCertificatById(id:any){
    return this.http.get<Certificat>('http://localhost:8084/SpringBoot/get-Training-By-Id/'+id);
  }
}