import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeuiAlertComponent } from './alert.component';

@NgModule({
  declarations: [
    CeuiAlertComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CeuiAlertComponent,
  ]
})
export class CeuiAlertModule { }
