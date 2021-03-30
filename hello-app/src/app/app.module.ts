import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { PersonComponent } from './person/person.component';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { DemoComponent } from './demo/demo.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component'
import { LengthFinder } from './pipe-demo/custom-pipe';
import { DataBindingDemoComponent } from './data-binding-demo/data-binding-demo.component';


@NgModule({
  declarations: [
    AppComponent, EmployeeComponent, PersonComponent, DirectiveDemoComponent, DemoComponent, PipeDemoComponent,
    LengthFinder,
    DataBindingDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
