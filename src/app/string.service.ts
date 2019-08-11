import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {


  constructor() { }

  public countCapital(str:string) {
     return (str.length - str.replace(/[A-Z]/g, '').length);  
  }
}
