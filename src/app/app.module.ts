import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ArithmeticService} from './arithmetic.service';

import { AppComponent } from './app.component';
import { ContactUSComponent } from './contact-us/contact-us.component';
import { ArithmeticComponentComponent } from './arithmetic-component/arithmetic-component.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    ContactUSComponent,
    ArithmeticComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ArithmeticService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
