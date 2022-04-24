import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainingService } from 'src/app/Service/Training.Service';

@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.component.html',
  styleUrls: ['./add-training.component.sass']
})
export class AddTrainingComponent implements OnInit {

  constructor(private s:TrainingService, private router:Router)  {

   }

  ngOnInit(): void {
  }
  save(t:any){
    this.s.addTraining(t).subscribe(
      ()=>{
       // alert('good')
       this.router.navigate(['p2'])
      }
    );
      }

}
