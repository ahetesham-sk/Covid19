import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  public emp:any = {};
  public employees :any = [];
  search: string;
  constructor(private _employeeService : EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.getEmployees()
        .subscribe(data =>{this.employees = data})
  }

  saveEmployee(emp){
    this._employeeService.addEmployee(emp)
        .subscribe(response =>{
          this.ngOnInit();
          alert('Empliyee Added Successfully...');
        })
  }

  deleteEmployee(empID){
    this._employeeService.deleteEmployee(empID)
        .subscribe(response =>{
          alert('Empliyee Deleted Successfully...');
          this.ngOnInit();
        })
  }

}
