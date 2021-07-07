import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-struct-directives',
  templateUrl: './struct-directives.component.html',
  styleUrls: ['./struct-directives.component.css']
})
export class StructDirectivesComponent  {

  showElement:boolean = false;

  course:string = "java";

  employees = [
    {empId:101, empName:'sai'},
    {empId:102, empName:'teja'},
  ]
  /*employees:any = []
  constructor(empService:EmployeesService){
    this.employees = empService.getEmployeesInfo()
  }*/


}
