import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CertificatService } from 'src/app/Service/Certificat.Service';

@Component({
  selector: 'app-update-certificat',
  templateUrl: './update-certificat.component.html',
  styleUrls: ['./update-certificat.component.sass']
})
export class UpdateCertificatComponent implements OnInit {

  id!:any;
  constructor(private s:CertificatService,private ar:ActivatedRoute,
    private r:Router) { }

  ngOnInit(): void {
    this.id=this.ar.snapshot.params['id']
  }
save(f:any){
  this.s.updateCertificat(f,this.id).subscribe(
    ()=>{
this.r.navigate(['p2'])
    }
  );
}

}
