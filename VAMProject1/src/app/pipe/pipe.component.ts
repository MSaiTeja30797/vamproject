import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {
  name:string = 'suresh kumar'
  today:any = new Date()
  dob:any = new Date(1986, 3, 13)
  customer = {
    custId:101, custName:'suresh'
  }
}

