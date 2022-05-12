import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profile } from 'src/app/model/Profile';
import { ProfileService } from 'src/app/Service/Profile.Service';

@Component({
  selector: 'app-update-profil',
  templateUrl: './update-profil.component.html',
  styleUrls: ['./update-profil.component.sass']
})
export class UpdateProfilComponent implements OnInit {

  profile!:Profile;
  list!:Profile[];
  id!:number;
  constructor(private s:ProfileService,private ar:ActivatedRoute,
    private r:Router) { }

  ngOnInit(): void {
    this.id=this.ar.snapshot.params['id']
    this.s.getProfileById(this.id).subscribe(
      (d)=>{
        this.profile=d;
      }
    );
    this.s.getProfiles().subscribe(
      (t)=>{
        //this.list=[]
        this.list=t;
        console.log(t);
      }
    );
  }
  save(f:Profile){
    this.id=this.ar.snapshot.params['id']
    this.s.updateProfile(f,this.id).subscribe(
      ()=>{
      this.r.navigate(['detailpro'])
      }
    );
  }

  delete(id:any){
    this.s.deleteProfile(id).subscribe(()=>{
      this.s.getProfiles().subscribe(
        (t)=>{
          this.list=t;
          console.log(t);
        }
      );  
    })
  } 
}