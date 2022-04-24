import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterialService } from 'src/app/Service/Material.Service';

@Component({
  selector: 'app-update-material',
  templateUrl: './update-material.component.html',
  styleUrls: ['./update-material.component.sass']
})
export class UpdateMaterialComponent implements OnInit {

  id!:any;
  constructor(private s:MaterialService,private ar:ActivatedRoute,
    private r:Router) { }

  ngOnInit(): void {
    this.id=this.ar.snapshot.params['id']
  }
save(f:any){
  this.s.updateMaterial(f,this.id).subscribe(
    ()=>{
this.r.navigate(['p2'])
    }
  );
}

}
