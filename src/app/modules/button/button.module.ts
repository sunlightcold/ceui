import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonRoutingModule } from './button-routing.module';
import { BasicComponent } from './components/basic/basic.component';
import { DemoComponent } from './pages/demo/demo.component';
import { CodeModule } from '@app/code';
import { CeuiButtonModule } from '@ceui/core/components';


@NgModule({
  declarations: [BasicComponent, DemoComponent],
  imports: [
    CommonModule,
    ButtonRoutingModule,
    CodeModule,
    CeuiButtonModule
  ]
})
export class ButtonModule { }
