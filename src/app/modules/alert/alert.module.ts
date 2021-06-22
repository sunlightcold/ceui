import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertRoutingModule } from './alert-routing.module';
import { CeuiAlertModule } from '@ceui/core/components';
import { BasicComponent } from './components/basic/basic.component';
import { CloseComponent } from './components/close/close.component';
import { WithoutIconComponent } from './components/without-icon/without-icon.component';
import { DemoComponent } from './pages/demo/demo.component';
import { CodeModule } from '@app/code';

@NgModule({
  declarations: [BasicComponent, CloseComponent, WithoutIconComponent, DemoComponent],
  imports: [
    CommonModule,
    AlertRoutingModule,
    CeuiAlertModule,
    CodeModule,
  ]
})
export class AlertModule { }
