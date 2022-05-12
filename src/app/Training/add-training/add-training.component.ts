import { Component, OnInit } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Training } from 'src/app/model/Training';
import { TrainingService } from 'src/app/Service/Training.Service';

@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.component.html',
  styleUrls: ['./add-training.component.sass']
})
export class AddTrainingComponent implements OnInit {

  list!:Training[];
  constructor(private s:TrainingService, private router:Router, protected eventManager: EventManager)  {

   }

  ngOnInit(): void {

    this.s.getTrainings().subscribe(
      (t)=>{
        //this.list=[]
        this.list=t;
        console.log(t);
      }
    );
  }
  save(t:Training){
    this.s.addTraining(t).subscribe(
      ()=>{
       // alert('good')
       this.router.navigate(['addtr'])
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

