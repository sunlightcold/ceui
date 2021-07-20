import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeuiImageComponent } from './image.component';
import { CeuiImageLazyDirective } from './image-lazy.directive';

@NgModule({
  declarations: [
    CeuiImageComponent,
    CeuiImageLazyDirective,
   ],
  imports: [
    CommonModule,
  ],
  exports: [
    CeuiImageComponent,
    CeuiImageLazyDirective,
  ]
})
export class CeuiImageModule { }
