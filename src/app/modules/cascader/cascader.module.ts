import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CascaderRoutingModule } from './cascader-routing.module';
import { BasicComponent } from './components/basic/basic.component';
import { DemoComponent } from './pages/demo/demo.component';
import { CeuiCascaderModule, CeuiFormFieldModule, CeuiInputModule } from '@ceui/core/components';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BasicComponent, DemoComponent],
  imports: [
    CommonModule,
    CascaderRoutingModule,
    CeuiCascaderModule,
    CeuiFormFieldModule,
    CeuiInputModule,
    FormsModule,
  ]
})
export class CascaderModule { }
