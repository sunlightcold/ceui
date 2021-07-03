import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastRoutingModule } from './toast-routing.module';
import { BasicComponent } from './components/basic/basic.component';
import { DemoComponent } from './pages/demo/demo.component';
import { CeuiButtonModule, CeuiToastModule } from '@ceui/core/components';
import { CodeModule } from '@app/code';

@NgModule({
  declarations: [BasicComponent, DemoComponent],
  imports: [
    CommonModule,
    ToastRoutingModule,
    CeuiToastModule,
    CodeModule,
    CeuiButtonModule,
  ],
  providers: [
  ]
})
export class ToastModule { }
