import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'saiteja',
  templateUrl: './saiteja.component.html',
  styleUrls: ['./saiteja.component.css']
})
export class SaitejaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name:string = 'sai';
  age:number = 21;

  customer = {
    a : 101,
    b : 'sai',
    c : true,
    d : [20, 21, 22],
    e : [[101,'sam'], [102,'hari'], [103,'mahesh']],
    
  }

}
