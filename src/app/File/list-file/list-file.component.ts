import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/Service/File.Service';

@Component({
  selector: 'app-list-file',
  templateUrl: './list-file.component.html',
  styleUrls: ['./list-file.component.sass']
})
export class ListFileComponent implements OnInit {

  list!:any;
  constructor(private service: FileService) { }

  ngOnInit(): void {
    this.service.getFiles().subscribe(
      (t)=>{
        this.list=t;
        console.log(t);
      }
    );
  }

}
