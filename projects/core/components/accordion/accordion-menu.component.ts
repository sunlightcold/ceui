import { trigger, style, transition, animate } from '@angular/animations';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { CeuiAccordionOption } from './accordion.model';

@Component({
  selector: 'ceui-accordion-menu',
  templateUrl: './accordion-menu.component.html',
  styleUrls: ['./accordion-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('collapseState', [
      transition(':enter', [
        style({ height: 0, opacity: '0', visibility: 'hidden' }),
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)', style({ height: '*', opacity: '1', visibility: 'visible' })),
      ]),
      transition(':leave', [
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)', style({ height: '0', opacity: '0', visibility: 'hidden' })),
      ]),
    ]),
  ],
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
