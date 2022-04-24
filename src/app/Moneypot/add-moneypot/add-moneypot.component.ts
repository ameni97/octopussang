import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoneypotService } from 'src/app/Service/Moneypot.Service';

@Component({
  selector: 'app-add-moneypot',
  templateUrl: './add-moneypot.component.html',
  styleUrls: ['./add-moneypot.component.sass']
})
export class AddMoneypotComponent implements OnInit {

  constructor(private s:MoneypotService, private router:Router)  {

  }

 ngOnInit(): void {
 }
 save(t:any){
   this.s.addMoney(t).subscribe(
     ()=>{
      // alert('good')
      this.router.navigate(['p2'])
     }
   );
     }

}
