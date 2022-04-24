import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from 'src/app/Service/Question.Service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.sass']
})
export class AddQuestionComponent implements OnInit {

  constructor(private s:QuestionService, private router:Router)  {

  }

 ngOnInit(): void {
 }
 save(t:any){
   this.s.addQuestion(t).subscribe(
     ()=>{
      // alert('good')
      this.router.navigate(['p2'])
     }
   );
     }

}
