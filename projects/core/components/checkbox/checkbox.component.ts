import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Inject,
  Input,
  Optional,
  Output,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { CanColor, CanDisabled } from '@ceui/core/common';
import { MixinCeuiCheckboxBase } from './checkbox-base';
import { CeuiCheckboxChange } from './checkbox.model';

let checkboxId = 0;

@Component({
  selector: 'ceui-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  inputs: ['disabled', 'color'],
  host: {
    class: `ceui-checkbox`,
    '[class.ceui-checkbox-disabled]': 'disabled',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CeuiCheckboxComponent
  extends MixinCeuiCheckboxBase
  implements CanColor, CanDisabled
{
  @Input()
  @HostBinding(`class.ceui-checkbox-checked`)
  get checked() {
    return this._checked;
  }
  set checked(checked: boolean) {
    const newChecked = checked;
    if (this.checked !== newChecked) {
      this._checked = newChecked;
      this.updateValue(newChecked);
    }
  }
  private _checked = false;

  /**
   * 先前的值
   */
  get preValue() {
    return this._preValue;
  }
  set preValue(value: any) {
    this._preValue = value;
    this.checked = value;
  }

  @Input() name: string | null = null;

  @Input() id = `ceui-checkbox-${checkboxId++}`;

  /**
   * 未决状态，一旦点击将变为未选中状态
   */
  @Input()
  get indeterminate() {
    return this._indeterminate;
  }
  set indeterminate(indeterminate: boolean) {
    if (this.indeterminate !== indeterminate) {
      this._indeterminate = indeterminate;
      this.indeterminateChange.emit(indeterminate);
    }
  }
  private _indeterminate = false;

  @Input()
  get required() {
    return this._required;
  }
  set required(required: boolean) {
    this._required = required;
  }
  private _required = false;

  @Output() change = new EventEmitter<CeuiCheckboxChange>();

  @Output() indeterminateChange = new EventEmitter<boolean>();

  constructor(
    @Optional()
    @Inject(NgControl)
    _ngControl: NgControl,
    changeDetectorRef: ChangeDetectorRef,
    elementRef: ElementRef,
  ) {
    super(_ngControl, changeDetectorRef, elementRef);
  }

  onInputClick(event: Event) {
    event.stopPropagation();
  }

  onInputChange(event: Event) {
    event.stopPropagation();
    if (this.indeterminate) {
      this.indeterminate = false;
    }
    console.log(this);
    this.checked = !this.checked;
    this.updateValue(this.checked);
    this._emitChangeEvent();
  }

  private _emitChangeEvent() {
    this.change.emit(new CeuiCheckboxChange(this, this.checked));
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
    this.checkControlUpdate();
  }
}
