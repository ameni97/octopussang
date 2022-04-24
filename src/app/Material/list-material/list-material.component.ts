import { Component, OnInit } from '@angular/core';
import { MaterialService } from 'src/app/Service/Material.Service';

@Component({
  selector: 'app-list-material',
  templateUrl: './list-material.component.html',
  styleUrls: ['./list-material.component.sass']
})
export class ListMaterialComponent implements OnInit {

  list!:any;
  constructor(private service: MaterialService) { }

  ngOnInit(): void {
    this.service.getMaterials().subscribe(
      (t)=>{
        this.list=t;
        console.log(t);
      }
    );
  }

}
