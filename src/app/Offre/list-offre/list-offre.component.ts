import { Component, OnInit } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { Offre } from 'src/app/model/Offre';
import { OffreService } from 'src/app/Service/Offre.Service';

@Component({
  selector: 'app-list-offre',
  templateUrl: './list-offre.component.html',
  styleUrls: ['./list-offre.component.sass']
})
export class ListOffreComponent implements OnInit {

  list!:Offre[];
  constructor(private service: OffreService,  protected eventManager: EventManager) { }

  ngOnInit(): void {
    this.service.getOffres().subscribe(
      (t)=>{
        this.list=t;
        console.log(t);
      }
    );
  }

}
