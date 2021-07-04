import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import {
  ComponentRef,
  Directive,
  ElementRef,
  HostListener,
  Input,
} from '@angular/core';
import { isEmpty } from '@ceui/cdk/utils';
import { CanDisabled, CanDirection } from '@ceui/core/common';
import { MixinTooltipBase } from './tooltip-base';
import { CeuiTooltipComponent } from './tooltip.component';

@Directive({
  selector: '[ceuiTooltip], [ceui-tooltip]',
  inputs: ['direction'],
})
export class CeuiTooltipDirective
  extends MixinTooltipBase
  implements CanDirection
{
  tooltipComRef!: ComponentRef<CeuiTooltipComponent>;

  isMouseenter = false;

  @Input() content!: string;

  @Input()
  get tooltipDisabled() {
    return this._tooltipDisabled;
  }
  set tooltipDisabled(disabled: boolean) {
    this._tooltipDisabled = disabled;
    if (this.isMouseenter) {
      disabled ? this.hide() : this.show();
    }
  }
  private _tooltipDisabled = false;

  @HostListener('mouseenter') onMouseenter() {
    this.isMouseenter = true;
    this.show();
  }

  @HostListener('mouseleave') onMouseleave() {
    this.isMouseenter = false;
    this.hide();
  }

  constructor(
    private _elementRef: ElementRef<HTMLElement>,
    private _overlay: Overlay
  ) {
    super();
  }

  createTooltip() {
    const position = this._overlay
      .position()
      .flexibleConnectedTo(this._elementRef.nativeElement)
      .withPositions([this._getPosition()]);
    const overlayRef = this._overlay.create({ positionStrategy: position });
    const componentPortal = new ComponentPortal(CeuiTooltipComponent);
    this.tooltipComRef = overlayRef.attach(componentPortal);
    Object.assign(this.tooltipComRef.instance, {
      content: this.content,
      direction: this.direction,
    });
  }

  show() {
    if (this.tooltipDisabled) {
      return;
    }

    if (isEmpty<string>(this.content) || this.content === '') {
      return;
    }

    if (this.tooltipComRef) {
      this.tooltipComRef.destroy();
    }
    this.createTooltip();
    this.tooltipComRef.instance.show();
  }

  hide() {
    if (this.tooltipComRef) {
      this.tooltipComRef.instance.hide();
    }
  }
}
