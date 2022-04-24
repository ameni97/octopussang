import { Component, OnInit } from '@angular/core';
import { CertificatService } from 'src/app/Service/Certificat.Service';

@Component({
  selector: 'app-list-certificat',
  templateUrl: './list-certificat.component.html',
  styleUrls: ['./list-certificat.component.sass']
})
export class ListCertificatComponent implements OnInit {

  list!:any;
  constructor(private service: CertificatService) { }

  ngOnInit(): void {
    this.service.getCertificats().subscribe(
      (t)=>{
        this.list=t;
        console.log(t);
      }
    );
  }

}
