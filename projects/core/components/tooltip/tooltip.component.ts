import { Component, HostBinding, Input } from '@angular/core';
import { Direction } from '@ceui/core/types';

@Component({
  selector: 'ceui-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class CeuiTooltipComponent {
  @Input() content!: string;

  @Input() direction: Direction = 'bottom';

  @HostBinding('class') get hostClass() {
    return this.direction;
  }

  @HostBinding('style.display') hostDisplay = 'none';

  constructor() {}

  show() {
    this.hostDisplay = 'display';
  }

  hide() {
    this.hostDisplay = 'none';
  }
}
