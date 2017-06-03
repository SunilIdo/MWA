import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Counter App';
  ComponentCounterValue:number=10;
  onCounterChange(c:number){
    this.ComponentCounterValue=c;
  }
}
