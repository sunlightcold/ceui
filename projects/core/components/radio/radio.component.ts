import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ElementRef,
  EventEmitter,
  Output,
  Renderer2,
  Self,
  ViewEncapsulation,
} from '@angular/core';
import {
  AfterContentInit,
  Component,
  ContentChildren,
  Directive,
  forwardRef,
  HostBinding,
  Inject,
  InjectionToken,
  Input,
  Optional,
  QueryList,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { CeuiAbstractControl } from '@ceui/cdk/abstract';
import { ThemePalette } from '@ceui/core/types';
import { CeuiRadioChange } from './radio.model';

/**
 * radio group token
 */
export const CEUI_RADIO_GROUP_TOKEN = new InjectionToken<CeuiRadioGroup>(
  `CEUI_RADIO_GROUP`
);

/**
 * radio group 编号，整数递增
 */
let radioGroupId = 0;

/**
 * 标识 radio 的 id，整数递增
 */
let radioId = 0;

@Directive()
export abstract class CeuiRadioGroupBase
  extends CeuiAbstractControl<any>
  implements AfterContentInit
{
  /**
   * radio group 编号，用于标识一组 radio
   */
  private _name = `ceui-radio-group-${radioGroupId++}`;

  abstract radios: QueryList<CeuiRadioComponent>;

  @Input()
  get color() {
    return this._color;
  }
  set color(color: ThemePalette) {
    if (color && this.color !== color) {
      this._color = color;
      this._updateRadioColor();
    }
  }
  private _color: ThemePalette = 'primary';

  @Input()
  get disabled() {
    return this._disabled;
  }
  set disabled(disabled: boolean) {
    this._disabled = disabled;
    this._updateRadioDisabled();
  }
  private _disabled = false;

  /**
   * 先前的值
   */
  get preValue() {
    return this._preValue;
  }
  set preValue(value: any) {
    this._preValue = value;
    this._updateRadioSelected();
  }

  get selected() {
    return this._selected;
  }
  set selected(selected: CeuiRadioBase | null) {
    this._selected = selected;
    this.updateValue(selected ? selected.value : null);
    this._checkSelectedRadio();
  }
  private _selected: CeuiRadioBase | null = null;

  @Output() change = new EventEmitter<CeuiRadioChange>();

  constructor(
    @Optional()
    @Self()
    @Inject(NgControl)
    _ngControl: NgControl,
    @Inject(ChangeDetectorRef)
    changeDetectorRef: ChangeDetectorRef
  ) {
    super(_ngControl, changeDetectorRef);
  }

  ngAfterContentInit() {
    this._updateRadioButtonNames();
    this._updateRadioDisabled();
    this._updateRadioColor();
  }

  private _updateRadioButtonNames() {
    if (this.radios) {
      this.radios.forEach((radio) => {
        radio.name = this._name;
        radio.markForCheck();
      });
    }
  }

  _updateRadioChecked(id: string) {
    if (this.radios) {
      this.radios.forEach(
        (radio) => radio.id !== id && (radio.checked = false)
      );
    }
  }

  private _updateRadioSelected() {
    const isAlreadySelected =
      this.selected !== null && this.selected.value === this.value;
    if (!isAlreadySelected && this.radios) {
      this.radios.forEach((radio) => {
        radio.checked = this.value === radio.value;
        if (radio.checked) {
          this._selected = radio;
        }
      });
    }
  }

  private _updateRadioDisabled() {
    if (this.radios) {
      this.radios.forEach((radio) => {
        radio.disabled = this.ngDisabled;
        radio.markForCheck();
      });
    }
  }

  private _updateRadioColor() {
    if (this.radios) {
      this.radios.forEach((radio) => {
        radio.color = this.color;
        radio.markForCheck();
      });
    }
  }

  private _checkSelectedRadio() {
    if (this._selected && !this._selected.checked) {
      this._selected.checked = true;
    }
  }

  _emitChangeEvent() {
    this.change.emit(new CeuiRadioChange(this.selected!, this.value));
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
    this.checkControlUpdate();
  }
}

/**
 * radio-group radio 写在一个文件，避免循环依赖警告，这是因为 radio-group radio 相互依赖
 */
@Directive({
  selector: 'ceui-radio-group',
  host: {
    class: 'ceui-radio-group',
  },
  providers: [
    {
      provide: CEUI_RADIO_GROUP_TOKEN,
      useExisting: CeuiRadioGroup,
    },
  ],
})
export class CeuiRadioGroup extends CeuiRadioGroupBase {
  @ContentChildren(forwardRef(() => CeuiRadioComponent), { descendants: true })
  radios!: QueryList<CeuiRadioComponent>;
}
@Directive()
export abstract class CeuiRadioBase {
  /**
   * 单选按钮的唯一 id
   */
  @HostBinding('attr.id')
  id = `ceui-radio-${radioId++}`;

  @Input()
  @HostBinding('class.ceui-radio-checked')
  get checked() {
    return this._checked;
  }
  set checked(value: boolean) {
    const newChecked = value;
    if (this.checked !== newChecked) {
      if (this._radioGroup) {
        this._radioGroup._updateRadioChecked(this.id);
      }
      this._checked = value;
    }
  }
  private _checked = false;

  @Input()
  color: ThemePalette = 'primary';

  @Input()
  @HostBinding('class.ceui-radio-disabled')
  get disabled() {
    return this._disabled;
  }
  set disabled(disabled: boolean) {
    this._disabled = disabled;
  }
  private _disabled = false;

  @Input()
  get value() {
    return this._value;
  }
  set value(value: any) {
    this._value = value;
    if (this._radioGroup !== null) {
      if (!this.checked) {
        this.checked = this._radioGroup.value === value;
      }
      if (this.checked) {
        this._radioGroup.selected = this;
      }
    }
  }
  private _value: any;

  @Input() name!: string;

  @Output() change = new EventEmitter<CeuiRadioChange>();

  constructor(
    @Optional()
    @Inject(CEUI_RADIO_GROUP_TOKEN)
    private _radioGroup: CeuiRadioGroup,
    private _changeDetectorRef: ChangeDetectorRef,
    private _elementRef: ElementRef,
    private _renderer2: Renderer2
  ) {}

  onInputChange(event: Event) {
    event.stopPropagation();
    this.checked = true;
    this._emitChangeEvent();

    const groupValueChanged =
      this._radioGroup && this._radioGroup.value !== this.value;
    if (this._radioGroup) {
      this._radioGroup.updateValue(this.value);
      if (groupValueChanged) {
        this._radioGroup._emitChangeEvent();
      }
    }
  }

  onInputClick(event: Event) {
    event.stopPropagation();
  }

  markForCheck() {
    this._changeDetectorRef.markForCheck();
  }

  _emitChangeEvent() {
    this.change.emit(new CeuiRadioChange(this, this.value));
  }
}

@Component({
  selector: 'ceui-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  host: {
    class: 'ceui-radio',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CeuiRadioComponent extends CeuiRadioBase {
  constructor(
    @Optional()
    @Inject(CEUI_RADIO_GROUP_TOKEN)
    _radioGroup: CeuiRadioGroup,
    _changeDetectorRef: ChangeDetectorRef,
    _elementRef: ElementRef,
    _renderer2: Renderer2
  ) {
    super(_radioGroup, _changeDetectorRef, _elementRef, _renderer2);
  }
}
