import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OffreService } from 'src/app/Service/Offre.Service';

@Component({
  selector: 'app-update-offre',
  templateUrl: './update-offre.component.html',
  styleUrls: ['./update-offre.component.sass']
})
export class UpdateOffreComponent implements OnInit {

  id!:any;
  constructor(private s:OffreService,private ar:ActivatedRoute,
    private r:Router) { }

    ngOnInit(): void {
      this.id=this.ar.snapshot.params['id']
    }
  save(f:any){
    this.s.updateOffre(f,this.id).subscribe(
      ()=>{
  this.r.navigate(['p2'])
      }
    );
  }
  
  }