import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoneypotService } from 'src/app/Service/Moneypot.Service';

@Component({
  selector: 'app-update-moneypot',
  templateUrl: './update-moneypot.component.html',
  styleUrls: ['./update-moneypot.component.sass']
})
export class UpdateMoneypotComponent implements OnInit {

  id!:any;
  constructor(private s:MoneypotService,private ar:ActivatedRoute,
    private r:Router) { }

  ngOnInit(): void {
    this.id=this.ar.snapshot.params['id']
  }
save(f:any){
  this.s.updateMoneypot(f,this.id).subscribe(
    ()=>{
this.r.navigate(['p2'])
    }
  );
}

}
