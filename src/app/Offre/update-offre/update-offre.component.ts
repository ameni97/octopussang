import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Offre } from 'src/app/model/Offre';
import { OffreService } from 'src/app/Service/Offre.Service';

@Component({
  selector: 'app-update-offre',
  templateUrl: './update-offre.component.html',
  styleUrls: ['./update-offre.component.sass']
})
export class UpdateOffreComponent implements OnInit {

  id!:any;
  offre!:Offre;
  list!:Offre[];
  constructor(private s:OffreService,private ar:ActivatedRoute,
    private r:Router) { }

    ngOnInit(): void {
      //this.id=this.ar.snapshot.params['id']
      this.s.getOffres().subscribe(
        (t)=>{
          this.list=t;
          console.log(t);
        }
      );
    }
  save(f:Offre){
    this.s.updateOffre(f,this.id).subscribe(
      ()=>{
  this.r.navigate(['detailoff'])
      }
    );
  }
  delete(id:any){
    this.s.deleteOffre(id).subscribe(()=>{
      this.s.getOffres().subscribe(
        (t)=>{
          this.list=t;
          console.log(t);
        }
      );  
    })
  } 
  
  }