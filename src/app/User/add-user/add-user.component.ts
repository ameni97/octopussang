import { Component, OnInit } from '@angular/core';
import {User} from '../../../app/model/User'
import { UserService } from 'src/app/Service/user.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.sass']
})
export class AddUserComponent implements OnInit {
  user : User = new User();

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    
  }
  save(){
    this.userService.adduser(this.user).subscribe(d=>{console.log(d)})
     
  }

}
