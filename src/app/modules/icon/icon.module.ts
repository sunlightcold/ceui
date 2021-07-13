import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconRoutingModule } from './icon-routing.module';
import { BasicComponent } from './components/basic/basic.component';
import { DemoComponent } from './pages/demo/demo.component';
import { CodeModule } from '@app/code';
import { CeuiIconModule } from '@ceui/core/components';


@NgModule({
  declarations: [BasicComponent, DemoComponent],
  imports: [
    CommonModule,
    IconRoutingModule,
    CodeModule,
    CeuiIconModule,
  ]
})
export class IconModule { }
