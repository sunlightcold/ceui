import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputRoutingModule } from './input-routing.module';
import { DemoComponent } from './pages/demo/demo.component';
import { BasicComponent } from './components/basic/basic.component';
import { CeuiInputModule } from '@ceui/core/components';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [DemoComponent, BasicComponent],
  imports: [
    CommonModule,
    InputRoutingModule,
    CeuiInputModule,
    FormsModule,
  ]
})
export class InputModule { }
