import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/Service/Question.Service';

@Component({
  selector: 'app-delete-question',
  templateUrl: './delete-question.component.html',
  styleUrls: ['./delete-question.component.sass']
})
export class DeleteQuestionComponent implements OnInit {

  id!:any;

  constructor(private ar:ActivatedRoute,private s:QuestionService, private router:Router)  {

  }

  ngOnInit(): void {
    this.id=this.ar.snapshot.params['id'];
this.s.deleteQuestion(this.id).subscribe(
  ()=>{
this.router.navigate(['p2'])
  }
);
  }

}
