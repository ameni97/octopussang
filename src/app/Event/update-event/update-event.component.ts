import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from 'src/app/model/Event';
import { EventService } from 'src/app/Service/Event.Service';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.sass']
})
export class UpdateEventComponent implements OnInit {

  event!:Event;
  list!:Event[];
  id!:number;
  constructor(private s:EventService,private ar:ActivatedRoute,
    private r:Router) { }

  ngOnInit(): void {
    this.id=this.ar.snapshot.params['id']
    this.s.getEventById(this.id).subscribe(
      (d)=>{
        this.event=d;
      }
    );
    this.s.getEvents().subscribe(
      (t)=>{
        //this.list=[]
        this.list=t;
        console.log(t);
      }
    );
  }
  save(f:Event){
    this.id=this.ar.snapshot.params['id']
    this.s.updateEvent(f,this.id).subscribe(
      ()=>{
      this.r.navigate(['detailevent'])
      }
    );
  }

  delete(idEvent:any){
    this.s.deleteEvent(idEvent).subscribe(()=>{
      this.s.getEvents().subscribe(
        (t)=>{
          this.list=t;
          console.log(t);
          //this.router.navigate(['addtr'])
        }
      );  
    })
  } }