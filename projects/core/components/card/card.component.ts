import { Component, ContentChild, Input, ViewEncapsulation } from '@angular/core';
import { CeuiCardTitle } from './card-content.directive';

@Component({
  selector: 'ceui-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CeuiCardComponent {
  @Input()
  public title!: string;

  @ContentChild(CeuiCardTitle)
  ceuiCardTitle!: CeuiCardTitle;

  constructor() {}
}
