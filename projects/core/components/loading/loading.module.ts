import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeuiLoadingComponent } from './loading.component';
import { CeuiLoadingDirective } from './loading.directive';

@NgModule({
  declarations: [
    CeuiLoadingComponent,
    CeuiLoadingDirective,
   ],
  imports: [
    CommonModule,
  ],
  exports: [
    CeuiLoadingComponent,
    CeuiLoadingDirective,
  ]
})
export class CeuiLoadingModule { }
