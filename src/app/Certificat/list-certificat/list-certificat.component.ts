import { Component, OnInit } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CertificatService } from 'src/app/Service/Certificat.Service';

@Component({
  selector: 'app-list-certificat',
  templateUrl: './list-certificat.component.html',
  styleUrls: ['./list-certificat.component.sass']
})
export class ListCertificatComponent implements OnInit {

  id!: number;
  public qrCertif:any;
  list!:any;
  constructor(private service: CertificatService, private router:Router, private ar:ActivatedRoute, protected eventManager: EventManager) { }

  ngOnInit(): void {
    this.service.getCertificats().subscribe(
      (t)=>{
        this.list=t;
        console.log(t);
      }
    );
  }
  public downloadPDF(idCertif:any):void{
    //this.id=this.ar.snapshot.params['id'];
    //this.service.downloadPDF(idCertif).subscribe((resp)=>{
      //console.log('resp : ', resp);
      window.open("http://localhost:8084/SpringBoot/test/genpdf/"+idCertif);
      this.router.navigate(['detailcer']);
    //});
  }

}
