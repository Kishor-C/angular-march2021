import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { PersonComponent } from './person/person.component'


@NgModule({
  declarations: [
    AppComponent, EmployeeComponent, PersonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
