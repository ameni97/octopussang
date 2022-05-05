import { Component, OnInit } from '@angular/core';
import {User} from '../../../app/model/User'
import { UserService } from 'src/app/Service/user.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.sass']
})
export class UpdateUserComponent implements OnInit {

  constructor(private userService : UserService, private router:Router,private activated : ActivatedRoute) { }
  user : User = new User();

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

  save(){
    this.userService.updateuser(this.user,).subscribe(d=>{console.log(d)})
    this.router.navigate(['/User/userList'])
  }
}
