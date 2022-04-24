import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/Service/Question.Service';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.sass']
})
export class UpdateQuestionComponent implements OnInit {

  id!:any;
  constructor(private s:QuestionService,private ar:ActivatedRoute,
    private r:Router) { }

  ngOnInit(): void {
    this.id=this.ar.snapshot.params['id']
  }
save(f:any){
  this.s.updateQuestion(f,this.id).subscribe(
    ()=>{
this.r.navigate(['p2'])
    }
  );
}

}
