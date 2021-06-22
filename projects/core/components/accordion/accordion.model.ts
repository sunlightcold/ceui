/**
 * 数据源接口
 */
export interface CeuiAccordionOption {
  title: string;

  disabled?: boolean;

  active?: boolean;

  isExpand?: boolean;

  children?: CeuiAccordionOption[];

  [props: string]: any;
}

/**
 * item change 事件
 */
export class CeuiAccordionItemChange {
  parent: CeuiAccordionOption;

  item: CeuiAccordionOption;

  constructor(parent: CeuiAccordionOption, item: CeuiAccordionOption) {
    this.parent = parent;
    this.item = item;
  }
}

/**
 * menu toggle 事件
 */
export class CeuiAccordionMenuToggle extends CeuiAccordionItemChange {
  isExpand: boolean;

  constructor(parent: CeuiAccordionOption, item: CeuiAccordionOption, isExpand: boolean) {
    super(parent, item);
    this.isExpand = isExpand;
  }
}
