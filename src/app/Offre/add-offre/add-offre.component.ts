import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OffreService } from 'src/app/Service/Offre.Service';

@Component({
  selector: 'app-add-offre',
  templateUrl: './add-offre.component.html',
  styleUrls: ['./add-offre.component.sass']
})
export class AddOffreComponent implements OnInit {

  constructor(private s:OffreService, private router:Router)  {
  }
    ngOnInit(): void {
    }
    save(t:any){
      this.s.addOffre(t).subscribe(
        ()=>{
         // alert('good')
         this.router.navigate(['p2'])
        }
      );
  
  }
}

  