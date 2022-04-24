import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/Service/Question.Service';

@Component({
  selector: 'app-list-question',
  templateUrl: './list-question.component.html',
  styleUrls: ['./list-question.component.sass']
})
export class ListQuestionComponent implements OnInit {

  list!:any;
  constructor(private service: QuestionService) { }

  ngOnInit(): void {
    this.service.getQuestions().subscribe(
      (t)=>{
        this.list=t;
        console.log(t);
      }
    );
  }

}
