import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/Service/Profile.Service';


@Component({
  selector: 'app-add-profil',
  templateUrl: './add-profil.component.html',
  styleUrls: ['./add-profil.component.sass']
})
export class AddProfilComponent implements OnInit {

  constructor(private s:ProfileService, private router:Router)  {
  }
    ngOnInit(): void {
    }
    save(t:ProfileService){
      this.s.addProfile(t).subscribe(
        ()=>{
         // alert('good')
         this.router.navigate(['addpr'])
        }
      );
        }
      }