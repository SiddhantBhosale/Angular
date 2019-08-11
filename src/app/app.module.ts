import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ArithmeticService} from './arithmetic.service';
import {NumberService} from './number.service';
import {StringService} from './string.service';

import { AppComponent } from './app.component';
import { ContactUSComponent } from './contact-us/contact-us.component';
import { ArithmeticComponentComponent } from './arithmetic-component/arithmetic-component.component';
import { from } from 'rxjs';
import { NumberComponentComponent } from './number-component/number-component.component';
import { StringComponentComponent } from './string-component/string-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactUSComponent,
    ArithmeticComponentComponent,
    NumberComponentComponent,
    StringComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ArithmeticService,NumberService,StringService],
  bootstrap: [AppComponent]
})
export class AppModule { }
