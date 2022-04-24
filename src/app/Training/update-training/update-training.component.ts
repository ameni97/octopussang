import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainingService } from 'src/app/Service/Training.Service';

@Component({
  selector: 'app-update-training',
  templateUrl: './update-training.component.html',
  styleUrls: ['./update-training.component.sass']
})
export class UpdateTrainingComponent implements OnInit {

  id!:any;
  constructor(private s:TrainingService,private ar:ActivatedRoute,
    private r:Router) { }

  ngOnInit(): void {
    this.id=this.ar.snapshot.params['id']
  }
save(f:any){
  this.s.updateTraining(f,this.id).subscribe(
    ()=>{
this.r.navigate(['p2'])
    }
  );
}

}
