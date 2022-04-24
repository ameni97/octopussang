import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/Service/Quiz.Service';

@Component({
  selector: 'app-list-quiz',
  templateUrl: './list-quiz.component.html',
  styleUrls: ['./list-quiz.component.sass']
})
export class ListQuizComponent implements OnInit {

  list!:any;
  constructor(private service: QuizService) { }

  ngOnInit(): void {
    this.service.getQuiz().subscribe(
      (t)=>{
        this.list=t;
        console.log(t);
      }
    );
  }

}
