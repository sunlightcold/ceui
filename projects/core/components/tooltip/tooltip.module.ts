import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeuiTooltipComponent } from './tooltip.component';
import { CeuiTooltipDirective } from './tooltip.directive';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    CeuiTooltipComponent,
    CeuiTooltipDirective,
   ],
  imports: [
    CommonModule,
    OverlayModule,
  ],
  exports: [
    CeuiTooltipComponent,
    CeuiTooltipDirective,
  ]
})
export class CeuiTooltipModule { }
