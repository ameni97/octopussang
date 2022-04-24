import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/Service/Event.Service';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.sass']
})
export class ListEventComponent implements OnInit {

  list!:any;
  constructor(private service: EventService) { }

  ngOnInit(): void {
    this.service.getEvents().subscribe(
      (t)=>{
        this.list=t;
        console.log(t);
      }
    );
  }

}
