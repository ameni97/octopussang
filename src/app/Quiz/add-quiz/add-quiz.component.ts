import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from 'src/app/Service/Quiz.Service';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.sass']
})
export class AddQuizComponent implements OnInit {

  constructor(private s:QuizService, private router:Router)  {

  }

 ngOnInit(): void {
 }
 save(t:any){
   this.s.addQuiz(t).subscribe(
     ()=>{
      // alert('good')
      this.router.navigate(['p2'])
     }
   );
     }

}
