import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeuiInputComponent } from './input.component';
import { FormsModule } from '@angular/forms';
import { CeuiInputDirective } from './input.directive';

@NgModule({
  declarations: [
    CeuiInputComponent,
    CeuiInputDirective,
   ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    CeuiInputComponent,
    CeuiInputDirective,
  ]
})
export class CeuiInputModule { }
