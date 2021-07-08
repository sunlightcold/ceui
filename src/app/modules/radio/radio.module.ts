import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioRoutingModule } from './radio-routing.module';
import { BasicComponent } from './components/basic/basic.component';
import { DemoComponent } from './pages/demo/demo.component';
import { CodeModule } from '@app/code';
import { CeuiRadioModule } from '@ceui/core/components';


@NgModule({
  declarations: [BasicComponent, DemoComponent],
  imports: [
    CommonModule,
    RadioRoutingModule,
    CodeModule,
    CeuiRadioModule,
  ]
})
export class RadioModule { }
