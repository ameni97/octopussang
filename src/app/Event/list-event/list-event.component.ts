import { Component, OnInit } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { EventService } from 'src/app/Service/Event.Service';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.sass']
})
export class ListEventComponent implements OnInit {

  list!:any;
  constructor(private service: EventService ,  protected eventManager: EventManager) { }

  ngOnInit(): void {
    this.service.getEvents().subscribe(
      (t)=>{
        this.list=t;
        console.log(t);
      }
    );
  }

  delete(id:number){
    this.service.deleteEvent(id).subscribe(()=>{
      console.log(id)
      this.service.getEvents().subscribe(
        (t)=>{
          this.list=t;
          console.log(t);
        }
      );  
    })
     
  }

}
