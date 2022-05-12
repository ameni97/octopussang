import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComplaintService } from 'src/app/Service/Complaint.Service';

@Component({
  selector: 'app-add-complaint',
  templateUrl: './add-complaint.component.html',
  styleUrls: ['./add-complaint.component.sass']
})
export class AddComplaintComponent implements OnInit {

  constructor(private s:ComplaintService, private router:Router)  {

  }

  ngOnInit(): void {
  }
  save(t:any){
    this.s.addComplaint(t).subscribe(
      ()=>{
       // alert('good')
       this.router.navigate(['p2'])
      }
    );
      }
 

}
