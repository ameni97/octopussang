import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/model/Question';
import { QuestionService } from 'src/app/Service/Question.Service';
import { QuizService } from 'src/app/Service/Quiz.Service';

@Component({
  selector: 'app-list-quiz',
  templateUrl: './list-quiz.component.html',
  styleUrls: ['./list-quiz.component.sass']
})
export class ListQuizComponent implements OnInit {

  list!:any;
  listq!:any;
  constructor(private service: QuizService, private serviceq: QuestionService) { }

  ngOnInit(): void {
    this.service.getQuiz().subscribe(
      (t)=>{
        this.list=t;
        console.log(t);
      }
    );
    this.serviceq.getQuestions().subscribe(
      (s)=>{
        this.listq=s;
        console.log(s);
      }
    );
  }

}
