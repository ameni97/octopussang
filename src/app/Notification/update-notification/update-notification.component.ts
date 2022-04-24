import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/Service/Notification.Service';

@Component({
  selector: 'app-update-notification',
  templateUrl: './update-notification.component.html',
  styleUrls: ['./update-notification.component.sass']
})
export class UpdateNotificationComponent implements OnInit {

  id!:any;
  constructor(private s:NotificationService,private ar:ActivatedRoute,
    private r:Router) { }

  ngOnInit(): void {
    this.id=this.ar.snapshot.params['id']
  }
save(f:any){
  this.s.updateNotification(f,this.id).subscribe(
    ()=>{
this.r.navigate(['p2'])
    }
  );
}

}
