import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoneypotService } from 'src/app/Service/Moneypot.Service';

@Component({
  selector: 'app-delete-moneypot',
  templateUrl: './delete-moneypot.component.html',
  styleUrls: ['./delete-moneypot.component.sass']
})
export class DeleteMoneypotComponent implements OnInit {

  id!:any;

  constructor(private ar:ActivatedRoute,private s:MoneypotService, private router:Router)  {

  }

  ngOnInit(): void {
    this.id=this.ar.snapshot.params['id'];
this.s.deleteMoneypot(this.id).subscribe(
  ()=>{
this.router.navigate(['p2'])
  }
);
  }

}
