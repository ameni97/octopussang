import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoneypotService {

  constructor(private http:HttpClient) { }
  getMoneypots(){
    return this.http.get('http://localhost:8084/SpringBoot/listerMoneypot');
   }
   deleteMoneypot(id:any){
     return this.http.delete('http://localhost:8084/SpringBoot/moneypot/'+id);
   }
   addMoney(data:any){
 return this.http.post('http://localhost:8084/SpringBoot/moneypot/',data);
   }
   updateMoneypot(data:any,id:any){
 return this.http.put('http://localhost:8084/SpringBoot/moneypot/'+id,data);
   }
   donate(money:any,id:any,iduser:any){
     const url='http://localhost:8084/SpringBoot/participer-a-Moneypot/'+iduser+"/"+id+"/"+money;
     return this.http.put(url,{});
   }
}