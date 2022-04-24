import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/Service/Notification.Service';

@Component({
  selector: 'app-add-notification',
  templateUrl: './add-notification.component.html',
  styleUrls: ['./add-notification.component.sass']
})
export class AddNotificationComponent implements OnInit {

  constructor(private s:NotificationService, private router:Router)  {

  }

 ngOnInit(): void {
 }
 save(t:any){
   this.s.addNotification(t).subscribe(
     ()=>{
      // alert('good')
      this.router.navigate(['p2'])
     }
   );
     }

}
