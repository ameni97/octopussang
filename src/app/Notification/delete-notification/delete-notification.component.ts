import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/Service/Notification.Service';

@Component({
  selector: 'app-delete-notification',
  templateUrl: './delete-notification.component.html',
  styleUrls: ['./delete-notification.component.sass']
})
export class DeleteNotificationComponent implements OnInit {

  id!:any;

  constructor(private ar:ActivatedRoute,private s:NotificationService, private router:Router)  {

  }

  ngOnInit(): void {
    this.id=this.ar.snapshot.params['id'];
this.s.deleteNotification(this.id).subscribe(
  ()=>{
this.router.navigate(['p2'])
  }
);
  }

}
