import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterialService } from 'src/app/Service/Material.Service';

@Component({
  selector: 'app-delete-material',
  templateUrl: './delete-material.component.html',
  styleUrls: ['./delete-material.component.sass']
})
export class DeleteMaterialComponent implements OnInit {

  id!:any;

  constructor(private ar:ActivatedRoute,private s:MaterialService, private router:Router)  {

  }

  ngOnInit(): void {
    this.id=this.ar.snapshot.params['id'];
this.s.deleteMaterial(this.id).subscribe(
  ()=>{
this.router.navigate(['p2'])
  }
);
  }

}
