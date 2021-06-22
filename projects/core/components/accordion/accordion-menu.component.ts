import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { CeuiAccordionOption } from './accordion.model';

@Component({
  selector: 'ceui-accordion-menu',
  templateUrl: './accordion-menu.component.html',
  styleUrls: ['./accordion-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AccordionMenuComponent implements OnInit {
  get isExpand() {
    return this.data.isExpand;
  }

  @Input() data!: CeuiAccordionOption;

  constructor() {}

  ngOnInit() {}

  toggleExpandStatus() {
    this.data.isExpand = !this.data.isExpand;
  }
}
