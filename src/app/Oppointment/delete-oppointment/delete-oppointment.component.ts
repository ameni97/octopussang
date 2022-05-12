import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OppointmentService } from 'src/app/Service/Oppointment.Service';

@Component({
  selector: 'app-delete-oppointment',
  templateUrl: './delete-oppointment.component.html',
  styleUrls: ['./delete-oppointment.component.sass']
})
export class DeleteOppointmentComponent implements OnInit {

  id!:any;

  constructor(private ar:ActivatedRoute,private s:OppointmentService, private router:Router)  {

  }

  ngOnInit(): void { this.id=this.ar.snapshot.params['id'];
  this.s.deleteOppointment(this.id).subscribe(
    ()=>{
  this.router.navigate(['detailopp'])
    }
  );
  }

}
