import { Component, OnInit } from '@angular/core';
import { TrainingService } from 'src/app/Service/Training.Service';

@Component({
  selector: 'app-list-training',
  templateUrl: './list-training.component.html',
  styleUrls: ['./list-training.component.sass']
})
export class ListTrainingComponent implements OnInit {

  list!:any;
  constructor(private service: TrainingService) { }

  ngOnInit(): void {
    this.service.getTrainings().subscribe(
      (t)=>{
        this.list=t;
        console.log(t);
      }
    );
  }

}
