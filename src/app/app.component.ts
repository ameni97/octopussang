import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'octopuss';
  constructor(){
    
  }
  ngOnInit(): void {
    sessionStorage.setItem('id','1')
  }
  
}

