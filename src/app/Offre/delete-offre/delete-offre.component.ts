import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OffreService } from 'src/app/Service/Offre.Service';

@Component({
  selector: 'app-delete-offre',
  templateUrl: './delete-offre.component.html',
  styleUrls: ['./delete-offre.component.sass']
})
export class DeleteOffreComponent implements OnInit {

  id!:any;

  constructor(private ar:ActivatedRoute,private s:OffreService, private router:Router)  {
  }
    ngOnInit(): void {
      this.id=this.ar.snapshot.params['id'];
  this.s.deleteOffre(this.id).subscribe(
    ()=>{
  this.router.navigate(['detailoff'])
    }
  );
    }
  
  }