import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeuiFormFieldComponent } from './form-field.component';
import { CeuiErrorDirective } from './error.directive';
import { CeuiLabelDirective } from './label.directive';
import { CeuiHintDirective } from './hint.directive';
import { CeuiResizeDirective } from './resize.directive';
import { CeuiSuffixDirective } from './suffix.directive';

@NgModule({
  declarations: [
    CeuiFormFieldComponent,
    CeuiErrorDirective,
    CeuiLabelDirective,
    CeuiHintDirective,
    CeuiResizeDirective,
    CeuiSuffixDirective,
   ],
  imports: [
    CommonModule,
  ],
  exports: [
    CeuiFormFieldComponent,
    CeuiErrorDirective,
    CeuiLabelDirective,
    CeuiHintDirective,
    CeuiResizeDirective,
    CeuiSuffixDirective,
  ]
})
export class CeuiFormFieldModule { }
