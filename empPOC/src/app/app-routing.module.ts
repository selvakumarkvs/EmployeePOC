import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeeComponent } from './Employee/list-employee.component';
import { AddEmployeeComponent } from './Employee/AddEmployee.Component';

const routes: Routes = [
  {path: 'list', component:ListEmployeeComponent},
  {path: 'create', component:AddEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
