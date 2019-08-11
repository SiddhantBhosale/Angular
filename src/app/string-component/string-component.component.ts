import { Component, OnInit } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-string-component',
  templateUrl: './string-component.component.html',
  styleUrls: ['./string-component.component.css']
})
export class StringComponentComponent implements OnInit {

  result: number;
  constructor(stringServiceObj:StringService) {
    this.result = stringServiceObj.countCapital("Hello World.");
   }

  ngOnInit() {
  }

}
