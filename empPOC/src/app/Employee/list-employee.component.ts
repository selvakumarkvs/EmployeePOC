import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../Service/Employee.service';
import { EmployeeBO } from '../BusinessObjects/EmployeeBO';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  empBO: EmployeeBO[];
  //  = [
  //   {
  //     fName: "selva",
  //     lName: "kumar"
  //   },
  //   {
  //     fName: "Kannan",
  //     lName: "Bala"
  //   }

  // ];
  employ: EmployeeBO;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployee()
      .subscribe(emp => {
        this.empBO = ((<EmployeeBO[]>(emp)));
      }
      );
  }

}
