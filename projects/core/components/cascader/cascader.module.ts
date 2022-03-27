import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CeuiInputModule } from '@ceui/core/components/input';
import { CeuiCascaderComponent } from './cascader.component';
import { CeuiCascaderTriggerComponent } from './cascader-trigger.component';

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
