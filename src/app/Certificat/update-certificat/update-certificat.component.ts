import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Certificat } from 'src/app/model/Certificat';
import { User } from 'src/app/model/User';
import { CertificatService } from 'src/app/Service/Certificat.Service';
import { UserService } from 'src/app/Service/User.Service';

@Component({
  selector: 'app-update-certificat',
  templateUrl: './update-certificat.component.html',
  styleUrls: ['./update-certificat.component.sass']
})
export class UpdateCertificatComponent implements OnInit {

  certificat!:Certificat;
  list!:Certificat[];
  id!:any;
  listf!:User[];
  constructor(private s:CertificatService,private su:UserService,private ar:ActivatedRoute,
    private r:Router) { }

  ngOnInit(): void {
    this.id=this.ar.snapshot.params['id']
    this.s.getCertificatById(this.id).subscribe(
      (d)=>{
        this.certificat=d;
      }
    );
    this.s.getCertificats().subscribe(
      (t)=>{
        //this.list=[]
        this.list=t;
        console.log(t);
      }
    );
    this.su.getUsers().subscribe(
      (t)=>{
        //this.list=[]
        this.listf=t;
        console.log(t);
      }
  );
  }
save(f:any){
  this.id=this.ar.snapshot.params['id']
    this.s.updateCertificat(f,this.id).subscribe(
      ()=>{
      this.r.navigate(['addcer'])
      }
    );
}
delete(id:any){
  this.s.deleteCertificat(id).subscribe(()=>{
    this.s.getCertificats().subscribe(
      (t)=>{
        this.list=t;
        console.log(t);
        //this.router.navigate(['addtr'])
      }
    );  
  })
} 

}
