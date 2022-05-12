import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComplaintService } from 'src/app/Service/Complaint.Service';

@Component({
  selector: 'app-delete-complaint',
  templateUrl: './delete-complaint.component.html',
  styleUrls: ['./delete-complaint.component.sass']
})
export class DeleteComplaintComponent implements OnInit {

  id!:any;

  constructor(private ar:ActivatedRoute,private s:ComplaintService, private router:Router)  {

  }

  ngOnInit(): void {
    this.id=this.ar.snapshot.params['id'];
this.s.deleteComplaint(this.id).subscribe(
  ()=>{
this.router.navigate(['detailcomp'])
  }
);
  }

}
