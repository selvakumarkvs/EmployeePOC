import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {EmployeeBO} from '../BusinessObjects/EmployeeBO';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
    private employeeApiURL = 'http://localhost:3000/employees';
  constructor(private http: HttpClient) {
    
   }
    public getEmployee():Observable<EmployeeBO[]>
    {
        return this.http.get<EmployeeBO[]>(this.employeeApiURL)
    }
}