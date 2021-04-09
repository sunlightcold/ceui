import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormFieldRoutingModule } from './form-field-routing.module';
import { BasicComponent } from './components/basic/basic.component';
import { DemoComponent } from './pages/demo/demo.component';
import { CeuiFormFieldModule, CeuiInputModule } from '@ceui/core/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [BasicComponent, DemoComponent],
  imports: [
    CommonModule,
    FormFieldRoutingModule,
    CeuiFormFieldModule,
    CeuiInputModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class FormFieldModule { }
