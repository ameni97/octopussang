import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileService } from 'src/app/Service/File.Service';

@Component({
  selector: 'app-add-file',
  templateUrl: './add-file.component.html',
  styleUrls: ['./add-file.component.sass']
})
export class AddFileComponent implements OnInit {

  constructor(private s:FileService, private router:Router)  {

  }

 ngOnInit(): void {
 }
 save(t:any){
   this.s.addFile(t).subscribe(
     ()=>{
      // alert('good')
      this.router.navigate(['p2'])
     }
   );
     }

}
