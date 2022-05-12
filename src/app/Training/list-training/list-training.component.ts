import { Component, OnInit } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainingService } from 'src/app/Service/Training.Service';

@Component({
  selector: 'app-list-training',
  templateUrl: './list-training.component.html',
  styleUrls: ['./list-training.component.sass']
})
export class ListTrainingComponent implements OnInit {

 
  list!:any;
  id!:any;
  constructor(private service: TrainingService,  protected eventManager: EventManager, private ar:ActivatedRoute,private r:Router) { }

  ngOnInit(): void {
    this.service.getTrainings().subscribe(
      (t)=>{
        this.list=t;
        console.log(t);
      }
    );
  }
  Participe(f:any){
      this.service.participateTraining(f,this.id).subscribe(
        ()=>{
    this.r.navigate(['detailtr'])
        }
      );
  }

}
