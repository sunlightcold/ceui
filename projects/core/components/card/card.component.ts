import { Component, Input } from '@angular/core';

@Component({
  selector: 'ceui-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input()
  public title!: string;

  constructor() {
  }
}
