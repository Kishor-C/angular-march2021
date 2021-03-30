import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-demo',
  templateUrl: './data-binding-demo.component.html',
  styleUrls: ['./data-binding-demo.component.css']
})
export class DataBindingDemoComponent  {

  username = "Bruce";
  isDisabled = false;

  handleClick() {
    this.isDisabled = !this.isDisabled;
  }

}
