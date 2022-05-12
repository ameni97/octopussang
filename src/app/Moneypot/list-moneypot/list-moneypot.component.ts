import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Moneypot } from 'src/app/model/Moneypot';
import { MoneypotService } from 'src/app/Service/Moneypot.Service';

@Component({
  selector: 'app-list-moneypot',
  templateUrl: './list-moneypot.component.html',
  styleUrls: ['./list-moneypot.component.sass']
})
export class ListMoneypotComponent implements OnInit {

  id!:number;
  money!:number;
  list!:any;
  userId!:any;
  div1:boolean=true;
  constructor(private service: MoneypotService,private r:Router,  private ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getMoneypots().subscribe(
      (t)=>{
        this.list=t;
        console.log(t);
      }
    );
  }
  div1Function(){
    this.div1=false;
  }
  donate(idmoney:any,money:any){
    //this.id=this.ar.snapshot.params['id']
   // this.money=this.ar.snapshot.params['money']
    this.userId=sessionStorage.getItem('id');
    this.service.donate(money,idmoney,Number(this.userId)).subscribe(
      ()=>{
        this.r.navigate(['detailmp'])
      }
    )
  }

}
