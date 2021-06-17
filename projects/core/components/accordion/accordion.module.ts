import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';
import { AccordionItemComponent } from './accordion-item.component';

@NgModule({
  declarations: [
    AccordionComponent,
    AccordionItemComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    AccordionComponent,
    AccordionItemComponent,
  ]
})
export class CeuiAccordionModule { }
