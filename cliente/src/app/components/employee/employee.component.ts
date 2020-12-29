import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms'
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from '../../services/employee.service'
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  
  constructor(public employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(){
    this.employeeService.getEmployees().subscribe(
      res => {
        this.employeeService.employees=res; 
      },
      err => console.error(err)
    )
  }

  addEmployee(form: NgForm ){
   
    if(form.value._id){
      console.log("act")
      this.employeeService.putEmployee(form.value).subscribe(
        res =>console.log(res),
        err =>console.error(err)
      )
    }else{
      this.employeeService.createEmployee(form.value).subscribe(
        res => {
          this.getEmployees();
          console.log(res);
          form.reset();
        },
        err => console.error(err)
      )
    }
  }
  resetForm(form: NgForm ){
    form.reset();

  }
  
  deleteEmployee(id?:string){
    if(confirm ('Are you sure?')){
      this.employeeService.deleteEmployee(id)
      .subscribe(
        (res) => {
          this.getEmployees();
          console.log(res);
        },
        (err) => console.error(err)
      );
    }
    
  }

  editEmployee(employee: Employee){
    this.employeeService.selectedEmployee= employee;
  }

  
}
