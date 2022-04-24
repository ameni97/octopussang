import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/Service/Quiz.Service';

@Component({
  selector: 'app-delete-quiz',
  templateUrl: './delete-quiz.component.html',
  styleUrls: ['./delete-quiz.component.sass']
})
export class DeleteQuizComponent implements OnInit {

  id!:any;

  constructor(private ar:ActivatedRoute,private s:QuizService, private router:Router)  {

  }

  ngOnInit(): void {
    this.id=this.ar.snapshot.params['id'];
this.s.deleteQuiz(this.id).subscribe(
  ()=>{
this.router.navigate(['p2'])
  }
);
  }

}
