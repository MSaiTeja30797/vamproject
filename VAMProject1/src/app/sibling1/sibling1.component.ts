import { Component, OnInit } from '@angular/core';
import { Data1Service } from '../services/data1.service';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})
export class Sibling1Component implements OnInit {

  customerss:any=[]
 customerss1:any=[
  {"empId":101,"empName":"sai","salary":25000},
  {"empId":102,"empName":"teja","salary":30000},
  {"empId":103,"empName":"ashok","salary":40000}
 ]

  constructor(private dataService:Data1Service) {

  }
  ngOnInit(): void {
    this.dataService.currentMsg.subscribe(successMsg => this.customerss = successMsg)
   }
  modifiedData(){
  // this.customerss.push({"empId":101,"empName":"sai","salary":25000})
   //this.customerss.push( {"empId":102,"empName":"teja","salary":30000})
  //this.customerss.push({"empId":103,"empName":"ashok","salary":40000})

    //for(var c of this.customerss)
    //this.dataService.changeData(c)

    for(var i=0;i<this.customerss1.length;i++){
      this.dataService.changeData(this.customerss1[i])
       }

  }

}
