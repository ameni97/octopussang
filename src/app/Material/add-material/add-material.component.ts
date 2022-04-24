import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialService } from 'src/app/Service/Material.Service';

@Component({
  selector: 'app-add-material',
  templateUrl: './add-material.component.html',
  styleUrls: ['./add-material.component.sass']
})
export class AddMaterialComponent implements OnInit {

  constructor(private s:MaterialService, private router:Router)  {

  }

 ngOnInit(): void {
 }
 save(t:any){
   this.s.addMaterial(t).subscribe(
     ()=>{
      // alert('good')
      this.router.navigate(['p2'])
     }
   );
     }

}
