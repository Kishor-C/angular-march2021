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
  
  qualificationsDB = ["BE", "BCA", "BCom"];

  login = this._form.group({
    username : ['', Validators.compose([Validators.required, 
      Validators.pattern("[a-zA-Z]+")])],
    password : ['', Validators.compose([Validators.required])],
    dob : ['', ]
  });

  handleSubmit() {
    console.log(this.login.value);
    this.login.reset();
    this.login.controls['username'].setValue("Dummy User");
    
  }

}
