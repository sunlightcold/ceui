import { Directive, ElementRef, HostBinding } from '@angular/core';
import { CanColor, CanDisabled } from '@ceui/core/common';
import { MixinCeuiButtonBase } from './button-base';

const BUTTON_HOST_ATTRIBUTES = ['ceui-button', 'ceui-full-button'];

@Directive({
  selector: 'button[ceui-full-button], button[ceui-button]',
  host: {
    class: 'ceui-button-base',
  },
  inputs: ['color', 'disabled'],
})
export class CeuiButton extends MixinCeuiButtonBase implements CanDisabled, CanColor {
  @HostBinding('class.disabled') get isDisabled() {
    return this.disabled;
  }

  constructor(_elementRef: ElementRef<HTMLButtonElement>) {
    super(_elementRef);
    this._addHostClass();
  }

  /**
   * 宿主元素添加 class
   */
  private _addHostClass() {
    for (const attribute of BUTTON_HOST_ATTRIBUTES) {
      if (this._hasHostAttribute(attribute)) {
        this._getHostElement().classList.add(attribute);
      }
    }
  }

  /**
   * 获取宿主元素
   */
  private _getHostElement(): HTMLButtonElement {
    return this._elementRef.nativeElement;
  }

  /**
   * 判断宿主元素是否存在 attribute
   */
  private _hasHostAttribute(attribute: string): boolean {
    return this._getHostElement().hasAttribute(attribute);
  }
}
