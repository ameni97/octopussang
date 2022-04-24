import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/Service/Quiz.Service';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.sass']
})
export class UpdateQuizComponent implements OnInit {

  id!:any;
  constructor(private s:QuizService,private ar:ActivatedRoute,
    private r:Router) { }

  ngOnInit(): void {
    this.id=this.ar.snapshot.params['id']
  }
save(f:any){
  this.s.updateQuiz(f,this.id).subscribe(
    ()=>{
this.r.navigate(['p2'])
    }
  );
}

}
