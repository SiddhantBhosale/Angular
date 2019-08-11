import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';


@Component({
  selector: 'app-number-component',
  templateUrl: './number-component.component.html',
  styleUrls: ['./number-component.component.css']
})
export class NumberComponentComponent implements OnInit {

  result : boolean;
  constructor(numberServiceObj:NumberService) { 
    this.result = numberServiceObj.checkPrime(7);
  }

  ngOnInit() {
  }

}
