import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profile } from '../model/Profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }
  getProfiles(){
    return this.http.get<Profile[]>('http://localhost:8084/SpringBoot/Profile/getProfile');
   }
   deleteProfile(id:any){
     return this.http.delete('http://localhost:8084/SpringBoot/Profile/supp-profile/'+id);
   }
   addProfile(data:any){
 return this.http.post('http://localhost:8084/SpringBoot/Profile/addProfile/',data);
   }
   updateProfile(data:any,id:any){
 return this.http.put('http://localhost:8084/SpringBoot/Profile/editProfile/'+id,data);
   }
   getProfileById(id:any){
    return this.http.get<Profile>('http://localhost:8084/SpringBoot/Profile/get-Profile-By-Id/'+id);
  }
}