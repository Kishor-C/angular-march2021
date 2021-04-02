import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit(formValues : any) {
    console.log(formValues);
    // you can assign to a variable or 
    //send the formValues to the remote service
  }

}
