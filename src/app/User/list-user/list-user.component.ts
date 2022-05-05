import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Service/user.service';
import {User} from '../../../app/model/User'

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.sass']
})
export class ListUserComponent implements OnInit {

  constructor(private userService : UserService) { }
  userList : User[]= [];
  ngOnInit(): void {
    this.userService.getUsers().subscribe((data)=>{
      this.userList = data
      console.log(data);
    })
  }

}
