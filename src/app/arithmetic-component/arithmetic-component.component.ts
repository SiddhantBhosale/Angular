import { Component, OnInit } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-arithmetic-component',
  templateUrl: './arithmetic-component.component.html',
  styleUrls: ['./arithmetic-component.component.css']
})
export class ArithmeticComponentComponent implements OnInit {

   add_result: number;
   sub_result:number;

  constructor(serviceObj:ArithmeticService) { 
    this.add_result = serviceObj.add(10,5);
    this.sub_result = serviceObj.sub(100,50);
  }

  ngOnInit() {
  }

}
