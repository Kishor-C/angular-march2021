import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  allUsers = [];
  // here angular will supply the DemoService instance
  constructor(private _service : DemoService) { }

  ngOnInit(): void {
  }
  handleClick() {
    this.allUsers = this._service.getUsers();
  }
}
