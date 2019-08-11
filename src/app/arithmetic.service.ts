import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {

  constructor() {
  }

  public add(a:number,b:number): number {
    return a + b;
  }

  public sub(a:number,b:number): number {
    return a - b;
  }

}
