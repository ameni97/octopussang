import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from 'src/app/Service/Profile.Service';

@Component({
  selector: 'app-delete-profil',
  templateUrl: './delete-profil.component.html',
  styleUrls: ['./delete-profil.component.sass']
})
export class DeleteProfilComponent implements OnInit {

  id!:any;

  constructor(private ar:ActivatedRoute,private s:ProfileService, private router:Router)  {
  }
    ngOnInit(): void {
      this.id=this.ar.snapshot.params['id'];
  this.s.deleteProfile(this.id).subscribe(
    ()=>{
  this.router.navigate(['p2'])
    }
  );
    }
  
  }