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
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-item/user-item.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormDemoComponent } from './form-demo/form-demo.component';

@NgModule({
  declarations: [
    AppComponent, EmployeeComponent, PersonComponent, DirectiveDemoComponent, DemoComponent, PipeDemoComponent,
    LengthFinder,
    DataBindingDemoComponent,
    UserListComponent,
    UserItemComponent,
    ParentComponent,
    ChildComponent,
    FormDemoComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
