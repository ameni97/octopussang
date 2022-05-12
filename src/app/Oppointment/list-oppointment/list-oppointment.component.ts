import { Component, OnInit } from '@angular/core';
import { OppointmentService } from 'src/app/Service/Oppointment.Service';


@Component({
  selector: 'app-list-oppointment',
  templateUrl: './list-oppointment.component.html',
  styleUrls: ['./list-oppointment.component.sass']
})
export class ListOppointmentComponent implements OnInit {

  list!:any;

  message: string="";
  reponse:String="";


  constructor(private service: OppointmentService) { }
  ngOnInit(): void {this.service.getOppointment().subscribe(
    (t)=>{
      this.list=t;
      console.log(t);
    }
  );
}
delete(id:number){
  this.service.deleteOppointment(id).subscribe(()=>{
    this.service.getOppointment().subscribe(
      (t)=>{
        this.list=t;
        console.log(t);
      }
    );  
  })
   
  }
 

}
