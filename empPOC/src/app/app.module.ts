import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './Employee/AddEmployee.Component';
import { HttpClientModule }    from '@angular/common/http';
import { ListEmployeeComponent } from './Employee/list-employee.component';


@NgModule({
  declarations: [
    AppComponent, AddEmployeeComponent, ListEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
