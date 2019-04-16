import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { EmployeeBO } from '../BusinessObjects/EmployeeBO';
import { catchError } from 'rxjs/operators';
//import {ErrorObservable} from 'rxjs/observable/ErrorObservable';

@Injectable({
    providedIn: 'root',
})
export class EmployeeService {
    private employeeApiURL = 'http://localhost:8626/api/values/GetEmployees';

    constructor(private http: HttpClient) {

    }
    public getEmployee(): Observable<EmployeeBO[]> {
        return this.http.get<EmployeeBO[]>(this.employeeApiURL)
    }

    public saveEmployee(employee: EmployeeBO) {
        // alert("serv");
        // this.http.post(this.employeeApiURL, employee, {
        //     headers: new HttpHeaders({
        //         'Content-Type': 'application/json'
        //     })
        // }).pipe(catchError(this.handleError));
        this.http.post(this.employeeApiURL, employee)
        .subscribe(
            data => {
                console.log("POST Request is successful ", data);
            },
            error => {
                console.log("Error", error);
            }
        );
    }
    public handleError(errorResponse:HttpErrorResponse)
    {
        alert("dfsds");
        console.log('Client Side Error : ' , errorResponse );
        return new Observable()
    } 
}