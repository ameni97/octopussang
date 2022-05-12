import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Training } from 'src/app/model/Training';
import { TrainingService } from 'src/app/Service/Training.Service';

@Component({
  selector: 'app-update-training',
  templateUrl: './update-training.component.html',
  styleUrls: ['./update-training.component.sass']
})
export class UpdateTrainingComponent implements OnInit {

  training!:Training;
  list!:Training[];
  id!:number;
  constructor(private s:TrainingService,private ar:ActivatedRoute,
    private r:Router) { }

  ngOnInit(): void {
    this.id=this.ar.snapshot.params['id']
    this.s.getTrainingById(this.id).subscribe(
      (d)=>{
        this.training=d;
      }
    );
    this.s.getTrainings().subscribe(
      (t)=>{
        //this.list=[]
        this.list=t;
        console.log(t);
      }
    );
  }
  save(f:Training){
    this.id=this.ar.snapshot.params['id']
    this.s.updateTraining(f,this.id).subscribe(
      ()=>{
      this.r.navigate(['addtr'])
      }
    );
  }

  delete(id:any){
    this.s.deleteTraining(id).subscribe(()=>{
      this.s.getTrainings().subscribe(
        (t)=>{
          this.list=t;
          console.log(t);
          //this.router.navigate(['addtr'])
        }
      );  
    })
  } 
}
