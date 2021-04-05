import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  constructor(private _form : FormBuilder) { }

  ngOnInit(): void {
  }

  login = this._form.group({
    username : [''],
    password : ['']
  });

  handleSubmit() {
    console.log(this.login.value);
    this.login.reset();
  }

}
