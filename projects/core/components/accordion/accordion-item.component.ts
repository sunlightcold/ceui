import {
  Component,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { threadId } from 'worker_threads';
import { AccordionComponent } from './accordion.component';
import {
  CeuiAccordionItemChange,
  CeuiAccordionMenuToggle,
  CeuiAccordionOption,
} from './accordion.model';
@Component({
  selector: 'ceui-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AccordionItemComponent implements OnInit, OnChanges {
  get disabled() {
    return this.data.disabled;
  }

  get active() {
    return this.data.active;
  }

  get isExpand() {
    return this.data.isExpand;
  }

  get hasChildren() {
    const { children } = this.data;
    return Array.isArray(children) && children.length;
  }

  @Input() parent!: CeuiAccordionOption;

  @Input() data!: CeuiAccordionOption;

  @HostBinding('attr.depth')
  @Input()
  depth!: number;

  @HostListener('click', ['$event'])
  onItem(_: MouseEvent) {
    if (this.disabled) {
      return;
    }

    if (this.hasChildren) {
      this.toggle();
    }
    if (!this.hasChildren) {
      this.itemActive(this.data);
      this.itemChangeFn();
    }
  }

  constructor(private accordion: AccordionComponent) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    const { data } = changes;
    if (data && data.currentValue.active) {
      Promise.resolve().then(() => {
        this.itemActive(data.currentValue);
      });
    }
  }

  toggle() {
    if (this.parent) {
      this.data.isExpand = !this.data.isExpand;
    } else {
      this.accordion.openMenu(this.data, !this.data.isExpand);
    }
    this.accordion.menuToggle.emit(
      new CeuiAccordionMenuToggle(this.parent, this.data, !!this.isExpand),
    );
  }

  itemChangeFn() {
    this.accordion.itemChange.emit(new CeuiAccordionItemChange(this.parent, this.data));
  }

  itemActive(item: CeuiAccordionOption) {
    const target = this.accordion.getSelectItem();
    if (target && target !== item) {
      target.active = false;
    }
    this.accordion.setSelectItem(item);
    item.active = true;
  }
}
