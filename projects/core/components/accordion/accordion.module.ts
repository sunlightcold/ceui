import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';
import { AccordionItemComponent } from './accordion-item.component';
import { AccordionMenuComponent } from './accordion-menu.component';

@NgModule({
  declarations: [
    AccordionComponent,
    AccordionItemComponent,
    AccordionMenuComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    AccordionComponent,
    AccordionItemComponent,
    AccordionMenuComponent,
  ]
})
export class CeuiAccordionModule { }
