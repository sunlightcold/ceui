import { CeuiRadioBase } from './radio.component';

/**
 * radio checked 属性改变时，发出事件数据实体
 */
export class CeuiRadioChange {
  constructor(
    /** 发出改变事件 radio */
    public source: CeuiRadioBase,
    /** 改变的值 */
    public value: any
  ) {}
}
