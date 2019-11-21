import { NgModule } from '@angular/core';
import { FormElementsLibComponent } from './form-elements-lib.component';
import { GuButtonComponent } from './button/button.component';
import { GuTextInputComponent } from './text-input/text-input.component';



@NgModule({
  declarations: [FormElementsLibComponent, GuButtonComponent, GuTextInputComponent],
  imports: [
  ],
  exports: [FormElementsLibComponent, GuButtonComponent, GuTextInputComponent]
})
export class FormElementsLibModule { }
