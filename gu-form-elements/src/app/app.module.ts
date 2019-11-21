import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormElementsLibModule } from 'form-elements-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormElementsLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
