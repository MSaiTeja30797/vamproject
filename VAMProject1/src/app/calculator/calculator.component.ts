import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent 
{
  x:any;
  y:any;
  z:any;

  getResult(value:any)
  {
    var value1=(Number)(this.x)
    var value2=(Number)(this.y)
    if(value=='+')
    this.z=value1+value2
    else if(value=='-')
    this.z=value1-value2
    else if(value=='*')
    this.z=value1*value2
    else 
    this.z=value1/value2
  }
  
 
}