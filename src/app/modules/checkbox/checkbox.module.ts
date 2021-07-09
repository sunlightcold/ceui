import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxRoutingModule } from './checkbox-routing.module';
import { BasicComponent } from './components/basic/basic.component';
import { DemoComponent } from './pages/demo/demo.component';
import { CodeModule } from '@app/code';
import { CeuiButtonModule, CeuiCheckboxModule } from '@ceui/core/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColorComponent } from './components/color/color.component';

@NgModule({
  declarations: [BasicComponent, DemoComponent, ColorComponent],
  imports: [
    CommonModule,
    CheckboxRoutingModule,
    CodeModule,
    CeuiCheckboxModule,
    FormsModule,
    CeuiButtonModule,
    ReactiveFormsModule,
  ],
})
export class CheckboxModule { }
