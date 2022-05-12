import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { File } from 'src/app/model/File';
import { FileService } from 'src/app/Service/File.Service';

@Component({
  selector: 'app-add-file',
  templateUrl: './add-file.component.html',
  styleUrls: ['./add-file.component.sass']
})
export class AddFileComponent implements OnInit {

  constructor(private s:FileService, private router:Router ,private ar:ActivatedRoute)  {

  }
file!:File;
list!:File[];
id!:any;
 ngOnInit(): void {
 // this.id=this.ar.snapshot.params['id'];
  this.s.getFiles().subscribe(
    (t)=>{
      //this.list=[]
      this.list=t;
      console.log(t);
    });
 }
 save(t:any){
   console.log(t);
   
   this.s.uploadFile(t).subscribe(
     ()=>{
      // alert('good')
      this.router.navigate(['addfile'])
     }
   );
 }

 delete(id:any){
  this.s.deleteFile(id).subscribe(()=>{
    this.s.getFiles().subscribe(
      (t)=>{
        this.list=t;
        console.log(t);
        //this.router.navigate(['addtr'])
      }
    );  
  })
} 

}
