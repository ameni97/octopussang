import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CertificatService } from 'src/app/Service/Certificat.Service';

@Component({
  selector: 'app-add-certificat',
  templateUrl: './add-certificat.component.html',
  styleUrls: ['./add-certificat.component.sass']
})
export class AddCertificatComponent implements OnInit {

  constructor(private s:CertificatService, private router:Router)  {

  }

 ngOnInit(): void {
 }
 save(t:any){
   this.s.addCertificat(t).subscribe(
     ()=>{
      // alert('good')
      this.router.navigate(['p2'])
     }
   );
     }

}
