import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  firstname = "Alexandar"; // you got from microservice/remote-service
  constructor() { }

  ngOnInit(): void {
  }
  send() {
    
  }
}
