import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastRoutingModule } from './toast-routing.module';
import { BasicComponent } from './components/basic/basic.component';
import { DemoComponent } from './pages/demo/demo.component';
import { CeuiToastModule, CeuiToastService } from '@ceui/core/components';

@NgModule({
  declarations: [BasicComponent, DemoComponent],
  imports: [
    CommonModule,
    ToastRoutingModule,
    CeuiToastModule,
  ],
  providers: [
  ]
})
export class ToastModule { }
