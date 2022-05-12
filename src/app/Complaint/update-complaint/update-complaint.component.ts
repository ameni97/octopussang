import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Complaint } from 'src/app/model/Complaint';
import { ComplaintService } from 'src/app/Service/Complaint.Service';

@Component({
  selector: 'app-update-complaint',
  templateUrl: './update-complaint.component.html',
  styleUrls: ['./update-complaint.component.sass']
})
export class UpdateComplaintComponent implements OnInit {

  id!:number;
  constructor(private s:ComplaintService,private ar:ActivatedRoute,
    private r:Router) { }

  ngOnInit(): void {
    this.id=this.ar.snapshot.params['id']
  }
save(f:Complaint){
  this.s.updateComplaint(f,this.id).subscribe(
    ()=>{
this.r.navigate(['detailcomp'])
    }
  );
  }

}
