import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OppointmentService } from 'src/app/Service/Oppointment.Service';

@Component({
  selector: 'app-add-oppointment',
  templateUrl: './add-oppointment.component.html',
  styleUrls: ['./add-oppointment.component.sass']
})
export class AddOppointmentComponent implements OnInit {

  constructor(private s:OppointmentService, private router:Router)  {

  }
  ngOnInit(): void {
  }
  save(t:any){
    this.s.addOppointment(t).subscribe(
      ()=>{
       // alert('good')
       this.router.navigate(['p2'])
      }
    );
      }

}
