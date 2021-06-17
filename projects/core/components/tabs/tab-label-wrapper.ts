import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ceuiTabLabelWrapper]',
})
export class CeuiTabLabelWrapper {
  constructor(private elementRef: ElementRef) {}

  getOffsetLeft(): number {
    return this.elementRef.nativeElement.offsetLeft;
  }

  getOffsetWidth(): number {
    return this.elementRef.nativeElement.offsetWidth;
  }
}
