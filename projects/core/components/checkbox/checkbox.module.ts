import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeuiCheckboxComponent } from './checkbox.component';

@NgModule({
  declarations: [
    CeuiCheckboxComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CeuiCheckboxComponent,
  ]
})
export class CeuiCheckboxModule { }
