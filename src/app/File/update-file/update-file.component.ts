import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FileService } from 'src/app/Service/File.Service';

@Component({
  selector: 'app-update-file',
  templateUrl: './update-file.component.html',
  styleUrls: ['./update-file.component.sass']
})
export class UpdateFileComponent implements OnInit {

  id!:any;
  constructor(private s:FileService,private ar:ActivatedRoute,
    private r:Router) { }

  ngOnInit(): void {
    this.id=this.ar.snapshot.params['id']
  }
save(f:any){
  this.s.updateFile(f,this.id).subscribe(
    ()=>{
this.r.navigate(['p2'])
    }
  );
}

}
