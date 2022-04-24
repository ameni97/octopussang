import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CertificatService } from 'src/app/Service/Certificat.Service';

@Component({
  selector: 'app-delete-certificat',
  templateUrl: './delete-certificat.component.html',
  styleUrls: ['./delete-certificat.component.sass']
})
export class DeleteCertificatComponent implements OnInit {

  id!:any;

  constructor(private ar:ActivatedRoute,private s:CertificatService, private router:Router)  {

  }

  ngOnInit(): void {
    this.id=this.ar.snapshot.params['id'];
this.s.deleteCertificat(this.id).subscribe(
  ()=>{
this.router.navigate(['p2'])
  }
);
  }
  }


