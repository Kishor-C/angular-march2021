import { Component, OnInit } from '@angular/core';
import { singlePerson, personArray }  from './person';
@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent  {
  person = singlePerson;
  allPerson = personArray;
}
