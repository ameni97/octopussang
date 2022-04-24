import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/Service/Event.Service';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.sass']
})
export class UpdateEventComponent implements OnInit {

  id!:any;
  constructor(private s:EventService,private ar:ActivatedRoute,
    private r:Router) { }

  ngOnInit(): void {
    this.id=this.ar.snapshot.params['id']
  }
save(f:any){
  this.s.updateEvent(f,this.id).subscribe(
    ()=>{
this.r.navigate(['p2'])
    }
  );
}

}
