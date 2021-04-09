import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  Input,
  OnInit,
  Optional,
  Self,
  ViewEncapsulation,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { CeuiAbstractControl } from '@ceui/cdk/abstract';
import { ThemeSize } from '@ceui/core/types';

@Component({
  selector: 'ceui-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CeuiInputComponent extends CeuiAbstractControl<string> implements OnInit {
  /**
   * 尺寸，默认 md
   */
  @Input() size: ThemeSize = 'sm';

  @Input() placeholder = '';

  @Input() type = 'text';

  constructor(
    @Optional()
    @Self()
    @Inject(NgControl)
    _ngControl: NgControl,
    @Inject(ChangeDetectorRef)
    changeDetectorRef: ChangeDetectorRef,
  ) {
    super(_ngControl, changeDetectorRef);
  }

  ngOnInit() {}

  onNgModelChange(value: string) {
    this.updateValue(value);
  }
}
