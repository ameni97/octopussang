import { Component, OnInit } from '@angular/core';
import { MoneypotService } from 'src/app/Service/Moneypot.Service';

@Component({
  selector: 'app-list-moneypot',
  templateUrl: './list-moneypot.component.html',
  styleUrls: ['./list-moneypot.component.sass']
})
export class ListMoneypotComponent implements OnInit {

  list!:any;
  constructor(private service: MoneypotService) { }

  ngOnInit(): void {
    this.service.getMoneypots().subscribe(
      (t)=>{
        this.list=t;
        console.log(t);
      }
    );
  }

}
