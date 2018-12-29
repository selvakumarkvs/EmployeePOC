import { Component, OnInit } from '@angular/core';
import {EmployeeBO} from '../BusinessObjects/EmployeeBO';
import {EmployeeService} from '../Service/Employee.service';

@Component({
  selector: 'add-employee',
  templateUrl: './AddEmployee.html',
  
})
export class AddEmployeeComponent implements OnInit {
    empBO:EmployeeBO =
        {
            fName: 'Selva'
        };

        constructor(private employeeService: EmployeeService) { }

        ngOnInit() {
            this.employeeService.getEmployee()
                                .subscribe(emp=>
                                    {
                                        this.empBO = ((<EmployeeBO[]>(emp))[0]);
                                        //console.log(((<EmployeeBO[]>(emp))[0]).fName);
                                    }
                                    );
        }
    
}
