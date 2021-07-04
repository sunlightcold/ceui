import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipRoutingModule } from './tooltip-routing.module';
import { BasicComponent } from './components/basic/basic.component';
import { DemoComponent } from './pages/demo/demo.component';
import { CodeModule } from '@app/code';
import { CeuiButtonModule, CeuiInputModule, CeuiTooltipModule } from '@ceui/core/components';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BasicComponent, DemoComponent],
  imports: [
    CommonModule,
    TooltipRoutingModule,
    CodeModule,
    CeuiTooltipModule,
    CeuiButtonModule,
    CeuiInputModule,
    ReactiveFormsModule,
  ]
})
export class TooltipModule { }
