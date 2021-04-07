import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent  {

  users = [];
  constructor(private _service : DemoService) {}

  // lifecycle method called after the constructor
  ngOnInit() {
    this._service.getAllUsers()
    .subscribe((data) => this.users = data, (err) => console.log("Err:"+err));
  }
}
