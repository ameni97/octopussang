import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  getUsers(){
    return this.http.get<any[]>('http://localhost:8089/pi/user/get-all-users');
   }
   deleteuser(id:any){
     return this.http.delete('http://localhost:8089/pi/user/delete/'+id);
   }
   
   
   adduser(data:any){
 return this.http.post('http://localhost:8089/pi/user/add-user',data);
   }
   
   
   updateuser(data:any){
 return this.http.put('http://localhost:8089/pi/user/update-user ',data);
   }
  fetchUsers() {
    return this.http.get('http://localhost:8089/pi/user');
  }
  getbyid(id:any) {
    return this.http.get('http://localhost:8089/pi/user/get-user-by-id/'+id);
  }
  
}
