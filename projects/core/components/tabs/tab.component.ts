import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, ContentChild, Input, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { CeuiTabLabel } from './tab-label';

@Component({
  selector: 'ceui-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CeuiTabComponent {
  @Input()
  label!: string;

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(disabled: boolean) {
    this._disabled = coerceBooleanProperty(disabled);
  }
  private _disabled = false;

  @ViewChild(TemplateRef, { static: true })
  templateRef!: TemplateRef<any>;

  @ContentChild(CeuiTabLabel)
  templateLabel!: CeuiTabLabel;

  constructor() {}
}
