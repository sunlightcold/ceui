import { Component, Input, OnInit } from '@angular/core';

/**
 * 数据源接口
 */
export interface CeuiAccordionOption {
  title: string;

  disabled?: boolean;

  active?: boolean;

  open?: boolean;

  children?: CeuiAccordionOption[];
}

@Component({
  selector: 'ceui-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  @Input() data: CeuiAccordionOption[] = [];

  constructor() { }

  ngOnInit() {
  }

}
