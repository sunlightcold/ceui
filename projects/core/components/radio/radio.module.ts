import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeuiRadioComponent, CeuiRadioGroup } from './radio.component';

@NgModule({
  declarations: [
    CeuiRadioComponent,
    CeuiRadioGroup,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CeuiRadioComponent,
    CeuiRadioGroup,
  ]
})
export class CeuiRadioModule { }
