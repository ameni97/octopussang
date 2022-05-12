import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from 'src/app/Service/Profile.Service';

@Component({
  selector: 'app-list-profil',
  templateUrl: './list-profil.component.html',
  styleUrls: ['./list-profil.component.sass']
})
export class ListProfilComponent implements OnInit {

  list!:any;
  constructor(private service: ProfileService) { }

  ngOnInit(): void {
    this.service.getProfiles().subscribe(
      (t): void=>{
        this.list=t;
        console.log(t);
      }
    );
  }

}
