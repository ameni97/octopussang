import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/Service/Event.Service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.sass']
})
export class AddEventComponent implements OnInit {

  constructor(private s:EventService, private router:Router)  {

  }

 ngOnInit(): void {
 }
 save(t:any){
   this.s.addEvent(t).subscribe(
     ()=>{
      // alert('good')
      this.router.navigate(['p2'])
     }
   );
     }

}
