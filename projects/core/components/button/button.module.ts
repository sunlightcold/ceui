import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeuiButton } from './button.directive';

@NgModule({
  declarations: [
    CeuiButton,
   ],
  imports: [
    CommonModule,
  ],
  exports: [
    CeuiButton,
  ]
})
export class CeuiButtonModule { }
