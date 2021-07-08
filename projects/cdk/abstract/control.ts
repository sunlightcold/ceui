import { ChangeDetectorRef, Directive, HostBinding, Input } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NgControl,
  NgModel,
} from '@angular/forms';
import { fallbackValue } from '@ceui/cdk/utils';

/**
 * ControlValueAccessor 封装类，用于构建表单组件
 */
@Directive()
export class CeuiAbstractControl<T> implements ControlValueAccessor {
  /**
   * 先前的值
   */
  get preValue() {
    return this._preValue;
  }
  set preValue(value: T) {
    this._preValue = value;
  }
  protected _preValue!: T;

  constructor(
    private readonly _ngControl: NgControl,
    protected readonly changeDetectorRef: ChangeDetectorRef,
  ) {
    if (this._ngControl === null) {
    } else {
      this._ngControl.valueAccessor = this;
    }
  }

  get value(): T {
    return this.preValue;
  }

  get invalid(): boolean {
    return this._getSafeNgControlProperty<boolean>(({ invalid }) => invalid, false);
  }

  get valid(): boolean {
    return this._getSafeNgControlProperty<boolean>(({ valid }) => valid, false);
  }

  get touched(): boolean {
    return this._getSafeNgControlProperty<boolean>(({ touched }) => touched, false);
  }

  get disabled(): boolean {
    return this._getSafeNgControlProperty<boolean>(({ disabled }) => disabled, false);
  }

  get control(): AbstractControl | null {
    return this._getSafeNgControlProperty<AbstractControl | null>(
      ({ control }) => control,
      null,
    );
  }

  @Input()
  @HostBinding('class._readonly')
  readonly = false;

  @HostBinding('class._invalid')
  get computedInvalid(): boolean {
    return this.touched && this.invalid;
  }

  private _onTouched = () => {};

  private _onChange = (value: T) => {};

  checkControlUpdate() {
    this._onTouched();
    this.changeDetectorRef.markForCheck();
  }

  writeValue(value: T | null) {
    this._updateLocalValue(
      this._ngControl instanceof NgModel && this.value === undefined
        ? this._ngControl.model
        : value,
    );
  }

  registerOnChange(onChange: (value: T) => void) {
    this._onChange = onChange;
  }

  registerOnTouched(onTouched: () => void) {
    this._onTouched = onTouched;
  }

  setDisabledState(disabled: boolean) {
    this.checkControlUpdate();
  }

  /**
   * 更新控制器的值，在数据不发生变化时不会触发更新，一般用于在视图更新时调用
   * @param value 更新的值
   */
  updateValue(value: T) {
    if (this.disabled || this.valueSameComparator(this.value, value)) {
      return;
    }
    this.preValue = value;
    this._changeControlValue(value);
  }

  protected valueSameComparator(oldValue: T, newValue: T): boolean {
    return oldValue === newValue;
  }

  private _changeControlValue(value: T) {
    this._onChange(value);
    this.checkControlUpdate();
  }

  /**
   * 更新本地缓存的值，一般用于在控制器值变化时调用，更新视图上的值
   * @param value 更新的值
   */
  private _updateLocalValue(value: T) {
    this.preValue = value;
    this.checkControlUpdate();
  }

  /**
   * 安全的获取 NgControl 的属性
   * @param extractor 提取器回调函数，用于解构 NgControl
   * @param defaultFieldValue 备用默认值
   */
  private _getSafeNgControlProperty<V>(
    extractor: (ngControl: NgControl) => V | null | undefined,
    defaultFieldValue: V,
  ): V {
    return fallbackValue<V>(extractor(this._ngControl || {}), defaultFieldValue);
  }
}
