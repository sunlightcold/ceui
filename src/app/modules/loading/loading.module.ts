import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingRoutingModule } from './loading-routing.module';
import { BasicComponent } from './components/basic/basic.component';
import { DemoComponent } from './pages/demo/demo.component';
import { CodeModule } from '@app/code';
import { CeuiLoadingModule } from '@ceui/core/components';


@NgModule({
  declarations: [BasicComponent, DemoComponent],
  imports: [
    CommonModule,
    CodeModule,
    LoadingRoutingModule,
    CeuiLoadingModule,
  ]
})
export class LoadingModule { }
