import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FileService } from 'src/app/Service/File.Service';

@Component({
  selector: 'app-delete-file',
  templateUrl: './delete-file.component.html',
  styleUrls: ['./delete-file.component.sass']
})
export class DeleteFileComponent implements OnInit {

  id!:any;

  constructor(private ar:ActivatedRoute,private s:FileService, private router:Router)  {

  }

  ngOnInit(): void {
    this.id=this.ar.snapshot.params['id'];
this.s.deleteFile(this.id).subscribe(
  ()=>{
this.router.navigate(['p2'])
  }
);
  }

}
