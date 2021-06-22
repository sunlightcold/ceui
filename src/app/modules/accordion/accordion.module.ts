import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionRoutingModule } from './accordion-routing.module';
import { BasicComponent } from './components/basic/basic.component';
import { DemoComponent } from './pages/demo/demo.component';
import { CeuiAccordionModule } from '@ceui/core/components';
import { CodeModule } from '@app/code';

@NgModule({
  declarations: [
    BasicComponent,
    DemoComponent,
  ],
  imports: [
    CommonModule,
    AccordionRoutingModule,
    CeuiAccordionModule,
    CodeModule,
  ]
})
export class AccordionModule { }
