import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ComplaintService } from 'src/app/Service/Complaint.Service';

@Component({
  selector: 'app-list-complaint',
  templateUrl: './list-complaint.component.html',
  styleUrls: ['./list-complaint.component.sass']
})
export class ListComplaintComponent implements OnInit {


  list!:any;

  //chatbot variables
  message: string="";
  reponse:String="";
  received:String[]=[];
  sent:String[]=[];
  messages:String[][]=[];




  constructor(private ar:ActivatedRoute,private service: ComplaintService,private router:Router) { }
  ngOnInit(): void {
    this.service.getComplaint().subscribe(
      (t)=>{
        this.list=t;
        console.log(t);
      }
    );
  }
  delete(id:number){
    this.service.deleteComplaint(id).subscribe(()=>{
      this.service.getComplaint().subscribe(
        (t)=>{
          this.list=t;
          console.log(t);
        }
      );  
    })
     
  }

  public chat()
  {
     this.service.chatBot(this.message).subscribe(data => {
       this.reponse=data;
       this.sent.push(data);
       var newDat:String;
       newDat=this.message;
       this.received.push(newDat);
       this.messages.push([this.reponse,newDat]);

      
      });
    //this.message="";
  }

  public changeStatus(id:number)
  {
    this.service.changeStat(id).subscribe(
      ()=>{
        location.reload();
      }
    );
  }

}
