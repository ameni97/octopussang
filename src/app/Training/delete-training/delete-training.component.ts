import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainingService } from 'src/app/Service/Training.Service';

@Component({
  selector: 'app-delete-training',
  templateUrl: './delete-training.component.html',
  styleUrls: ['./delete-training.component.sass']
})
export class DeleteTrainingComponent implements OnInit {
  id!:any;

  constructor(private ar:ActivatedRoute,private s:TrainingService, private router:Router)  {

  }

  ngOnInit(): void {
    this.id=this.ar.snapshot.params['id'];
this.s.deleteTraining(this.id).subscribe(
  ()=>{
this.router.navigate(['p2'])
  }
);
  }

}
