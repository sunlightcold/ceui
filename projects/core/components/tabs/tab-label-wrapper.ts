import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ceuiTabLabelWrapper]',
})
// tslint:disable-next-line: directive-class-suffix
export class CeuiTabLabelWrapper {
  constructor(private elementRef: ElementRef) {}

  getOffsetLeft(): number {
    return this.elementRef.nativeElement.offsetLeft;
  }

  getOffsetWidth(): number {
    return this.elementRef.nativeElement.offsetWidth;
  }
}
