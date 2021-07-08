import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioRoutingModule } from './radio-routing.module';
import { BasicComponent } from './components/basic/basic.component';
import { DemoComponent } from './pages/demo/demo.component';
import { CodeModule } from '@app/code';
import { CeuiButtonModule, CeuiRadioModule } from '@ceui/core/components';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [BasicComponent, DemoComponent],
  imports: [
    CommonModule,
    RadioRoutingModule,
    CodeModule,
    CeuiRadioModule,
    FormsModule,
    CeuiButtonModule,
  ]
})
export class RadioModule { }
