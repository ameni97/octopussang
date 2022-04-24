import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/Service/Notification.Service';

@Component({
  selector: 'app-list-notification',
  templateUrl: './list-notification.component.html',
  styleUrls: ['./list-notification.component.sass']
})
export class ListNotificationComponent implements OnInit {

  list!:any;
  constructor(private service: NotificationService) { }

  ngOnInit(): void {
    this.service.getNotifications().subscribe(
      (t)=>{
        this.list=t;
        console.log(t);
      }
    );
  }

}
