import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/Service/Event.Service';

@Component({
  selector: 'app-delete-event',
  templateUrl: './delete-event.component.html',
  styleUrls: ['./delete-event.component.sass']
})
export class DeleteEventComponent implements OnInit {

  id!:any;

  constructor(private ar:ActivatedRoute,private s:EventService, private router:Router)  {

  }

  ngOnInit(): void {
    this.id=this.ar.snapshot.params['id'];
this.s.deleteEvent(this.id).subscribe(
  ()=>{
this.router.navigate(['p2'])
  }
);
  }

}
