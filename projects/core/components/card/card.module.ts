import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeuiCardComponent } from './card.component';
import { CeuiCardContent, CeuiCardTitle } from './card-content.directive';

@NgModule({
  declarations: [
    CeuiCardComponent,
    CeuiCardTitle,
    CeuiCardContent,
   ],
  imports: [
    CommonModule,
  ],
  exports: [
    CeuiCardComponent,
    CeuiCardTitle,
    CeuiCardContent,
  ]
})
export class CeuiCardModule { }
