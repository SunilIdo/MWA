import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <button (click)="decreaseCounter()" id="sub" value="-">-</button>
    {{counterValue}}
    <button (click)="increaseCounter()" id="add" value="+">+</button>`,
  styles: ['button{width:30px; height:25px}']
})
export class CounterComponent implements OnInit {
  counterValue: number;
  @Input() 
  set counter(value:number){
    this.counterValue=value;
  }
  @Output() counterChange:EventEmitter<number>;
  constructor() {
    this.counterChange= new EventEmitter();
  }
  increaseCounter() {
    this.counterValue++;
    this.counterChange.emit(this.counterValue);
    return false;
  }
  decreaseCounter() {
    if (this.counterValue > 0) {
      this.counterValue--;
      this.counterChange.emit(this.counterValue);
    }
    return false;
  }
  ngOnInit() {
  }

}
