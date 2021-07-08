import { ViewEncapsulation } from '@angular/core';
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

export const CEUI_RADIO_GROUP_TOKEN = new InjectionToken<CeuiRadioGroup>(
  `CEUI_RADIO_GROUP`,
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
export abstract class CeuiRadioGroupBase implements AfterContentInit {
  private _name = `ceui-radio-group-${radioGroupId++}`;

  abstract radios: QueryList<CeuiRadioComponent>;

  ngAfterContentInit() {
    this._updateRadioButtonNames();
  }

  private _updateRadioButtonNames() {
    if (this.radios) {
      this.radios.forEach(radio => {
        radio.name = this._name;
        radio._markForCheck();
      });
    }
  }

  updateRadioChecked(id: string) {
    if (this.radios) {
      this.radios.forEach(radio => radio.id !== id && (radio.checked = false));
    }
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
        this._radioGroup.updateRadioChecked(this.id);
      }
      this._checked = value;
    }
  }
  private _checked = false;

  @Input()
  get value() {
    return this._value;
  }
  set value(value: any) {
    this._value = value;
  }
  private _value: any;

  @Input() name!: string;

  constructor(
    @Optional()
    @Inject(CEUI_RADIO_GROUP_TOKEN)
    private _radioGroup: CeuiRadioGroup,
  ) {
    console.log(_radioGroup);
  }

  onInputChange(event: Event) {
    event.stopPropagation();
  }

  onInputClick() {
    this.checked = !this.checked;
  }

  _markForCheck() {}
}

@Component({
  selector: 'ceui-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  host: {
    class: 'ceui-radio'
  },
  encapsulation: ViewEncapsulation.None
})
export class CeuiRadioComponent extends CeuiRadioBase {
  constructor(
    @Optional()
    @Inject(CEUI_RADIO_GROUP_TOKEN)
    radioGroup: CeuiRadioGroup,
  ) {
    super(radioGroup);
  }
}
