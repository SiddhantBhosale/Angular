import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  public checkPrime(a:number): boolean {
    if (a===1 || a === 2) {
    return true;
  }
  else {
    for(var x = 2; x < a/2; x++) {
      if(a % x === 0) {
        return false;
      }
    }
    return true;
  }
}
}
