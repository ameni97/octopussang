import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { File } from 'src/app/model/File';
import { FileService } from 'src/app/Service/File.Service';
import { TrainingService } from 'src/app/Service/Training.Service';

@Component({
  selector: 'app-list-file',
  templateUrl: './list-file.component.html',
  styleUrls: ['./list-file.component.sass']
})
export class ListFileComponent implements OnInit {

  list!:File[];
  t!:File[];
  id!:any;
  userId!:any;
  idtrain!:number;
  constructor(private s: FileService,private service:TrainingService, private router:Router,private ar:ActivatedRoute) { }
ngOnInit(): void {
    this.idtrain=this.ar.snapshot.params['id'];
    this.userId=sessionStorage.getItem('id');
    console.log(this.idtrain);
    this.s.getFilesBy(this.idtrain).subscribe(
      (t)=>{
        this.list=t;
        //this.router.navigate(['detailfile/:idtrain'])
      }
    )
    }
  public download(idFile:any):void{
      //this.id=this.ar.snapshot.params['id'];
      /*return this.s.downloadFile(id).subscribe((resp)=>{
        console.log('resp : ', resp);
        // this.router.navigate(['detailfile'])
      });*/
      window.open("http://localhost:8084/SpringBoot/test/downloadFile/"+idFile);
      this.router.navigate(["detailfile"])
  }

}
