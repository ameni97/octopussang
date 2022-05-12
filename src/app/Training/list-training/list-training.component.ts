import { Component, OnInit, ViewChild } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainingService } from 'src/app/Service/Training.Service';
import { MatPaginator } from '@angular/material/paginator';
import { PaginationControlsComponent } from 'ngx-pagination';
import { Training } from 'src/app/model/Training';

@Component({
  selector: 'app-list-training',
  templateUrl: './list-training.component.html',
  styleUrls: ['./list-training.component.sass']
})
export class ListTrainingComponent implements OnInit {

  list!:Training[];
  id!:number;
  userId!:any;
  p:number=1;
  title:any; 
  res:any;
  idtrain!: number;
  constructor(private service: TrainingService,  protected eventManager: EventManager, private ar:ActivatedRoute,private r:Router) { }

  ngOnInit(): void {
    this.service.getTrainings().subscribe(
      (t)=>{
        this.list=[]
        this.list=t;
        console.log(t);
      }
    );
  }
  Participe(idtrain:any):void{
    //this.idtrain=this.ar.snapshot.params['idtrain'];
    console.log(idtrain);
    this.userId=sessionStorage.getItem('id');
    console.log(this.userId);
      this.service.participateTraining(Number(this.userId),idtrain).subscribe(
        ()=>{
        this.r.navigate(['detailtr'])
        }
      );
  }
  Search(){
    if (this.title=="")
    {this.ngOnInit;}
    else{
      this.service.searchTrainings(this.title).subscribe((data:Training[])=>{
        this.list=data
      }
    )
    }
  }
  Affiche(idtrain:any):void{
    this.userId=sessionStorage.getItem('id');
    this.service.getFiles(idtrain,Number(this.userId)).subscribe(
      ()=>{this.r.navigate(['detailfile/:idtrain'])}
    )
  }

}