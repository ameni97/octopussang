import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Service/user.service';
import {User} from '../../../app/model/User'
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private userService : UserService, private router:Router,private activated : ActivatedRoute) { }
  user : User= new User();
  
  ngOnInit(): void {

    this.activated.paramMap.subscribe(
      d=>{
        let id =Number(d.get('id'));
        this.userService.getbyid(id).subscribe((data)=>{
          this.user = data
          console.log(data);
        })
      }
    )
    
  }
  delete(){
    
    this.activated.paramMap.subscribe(
      d=>{
        let id =Number(d.get('id'));
        this.userService.deleteuser(id).subscribe();
        this.router.navigate(['/User/userList'])

      }
    )
  }
}
