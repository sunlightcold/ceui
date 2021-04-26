import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeuiCascaderComponent } from './cascader.component';
import { CeuiCascaderTriggerComponent } from './cascader-trigger.component';
import { FormsModule } from '@angular/forms';
import { CeuiInputModule } from '../input/input.module';

@NgModule({
  declarations: [
    CeuiCascaderComponent,
    CeuiCascaderTriggerComponent,
   ],
  imports: [
    CommonModule,
    FormsModule,
    CeuiInputModule,
  ],
  exports: [
    CeuiCascaderComponent,
    CeuiCascaderTriggerComponent,
  ]
})
export class CeuiCascaderModule { }
