import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  BASEURL : string = 'http://dummy.restapiexample.com/api/v1';

  constructor(private http : HttpClient) { }

  getEmployees(){
   return this.http.get(`${this.BASEURL}/employees`);
  }

  addEmployee(data){
    return this.http.post(`${this.BASEURL}/create`,data);
   }

   deleteEmployee(empID){
    return this.http.delete(`${this.BASEURL}/delete/${empID}`);
   }
}
