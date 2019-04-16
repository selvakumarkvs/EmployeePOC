import { Component, OnInit } from '@angular/core';
import { EmployeeBO } from '../BusinessObjects/EmployeeBO';
import { EmployeeService } from '../Service/Employee.service';


@Component({
    selector: 'add-employee',
    templateUrl: './AddEmployee.html',

})
export class AddEmployeeComponent implements OnInit {

    emp: EmployeeBO = new EmployeeBO();
    constructor(private employeeService: EmployeeService) { }

    ngOnInit() {

    }
    saveEmp() {
        this.employeeService.saveEmployee(this.emp);
    }
}
