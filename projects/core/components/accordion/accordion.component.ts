import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CeuiAccordionItemChange, CeuiAccordionMenuToggle, CeuiAccordionOption } from './accordion.model';

@Component({
  selector: 'ceui-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  /**
   * 激活的 item
   */
  private selectItem!: CeuiAccordionOption;

  @Input() data: CeuiAccordionOption[] = [];

  /**
   * 限制一级菜单只能展开一个
   */
  @Input() onlyOneMenu = false;

  @Input() menuType: 'normal'|'embed' = 'normal';

  @Output() itemChange = new EventEmitter<CeuiAccordionItemChange>();

  @Output() menuToggle = new EventEmitter<CeuiAccordionMenuToggle>();

  constructor() { }

  ngOnInit() {
  }

  setSelectItem(item: CeuiAccordionOption) {
    this.selectItem = item;
  }

  getSelectItem() {
    return this.selectItem;
  }

  /**
   * 打开或关闭一级菜单
   */
  openMenu(item: CeuiAccordionOption, isOpen: boolean) {
    if (isOpen && this.onlyOneMenu) {
      this.data.forEach(tempItem => tempItem.isExpand = false);
    }
    item.isExpand = isOpen;
  }

}
