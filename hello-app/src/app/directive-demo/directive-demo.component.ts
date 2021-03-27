import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-demo',
  templateUrl: './directive-demo.component.html',
  styleUrls: ['./directive-demo.component.css']
})
export class DirectiveDemoComponent  {
  messageStatus : boolean = false;
  responseStatus : boolean = true;
  message = undefined;
  names: string[]= ["Bruce", "Alex", "David", "Charles"];
  users : any = [
        {"name":"Bruce","dob":"27-03-1990"}, 
        {"name":"John","dob":"28-03-1991"}
        ];
}
