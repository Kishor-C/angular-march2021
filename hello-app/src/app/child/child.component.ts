import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent  {

  @Input()
  childData = "This is child data";

  counter = 0; // need to be sent to parent

  // here EventEmitter is emitting only the number
  @Output()
  counterEvent : EventEmitter<number> = new EventEmitter<number>();

  handleClick() {
    this.counter++;
    this.counterEvent.emit(this.counter); // emits the counter value
  }
}
