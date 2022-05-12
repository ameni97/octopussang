import { Component, OnInit } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { ActivatedRoute,  Router } from '@angular/router';
import { Certificat } from 'src/app/model/Certificat';
import { User } from 'src/app/model/User';
import { CertificatService } from 'src/app/Service/Certificat.Service';
import { UserService } from 'src/app/Service/User.Service';

@Component({
  selector: 'app-add-certificat',
  templateUrl: './add-certificat.component.html',
  styleUrls: ['./add-certificat.component.sass']
})
export class AddCertificatComponent implements OnInit {

  list!:Certificat[];
  listf!:User[];
  currentD = new Date();
  user!:User;
  id!:any;
  certificat!:Certificat;
  constructor(private s:CertificatService, private su:UserService, private ar:ActivatedRoute, private router:Router, protected eventManager: EventManager)  {

  }

 ngOnInit(): void {
  this.s.getCertificats().subscribe(
    (t)=>{
      //this.list=[]
      this.list=t;
      console.log(t);
    });
    this.su.getUsers().subscribe(
      (t)=>{
        //this.list=[]
        this.listf=t;
        console.log(t);
      }
  );

 }
 save(t:Certificat){
   
  //this.id=this.ar.snapshot.params['id']
  console.log(t);
   this.s.addCertificat(t,t.user).subscribe(
     ()=>{
      // alert('good')
      this.router.navigate(['addcer'])
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

      public download(id:any):void{
        //this.id=this.ar.snapshot.params['id'];
        /*return this.s.downloadFile(id).subscribe((resp)=>{
          console.log('resp : ', resp);
          // this.router.navigate(['detailfile'])
        });*/
        window.open("http://localhost:8084/SpringBoot/test/http://localhost:8084/SpringBoot/genrateQRCode/"+id);
        this.router.navigate(["addcer"])
    } 

}
