import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  Renderer2,
} from '@angular/core';
import { Resize } from '@ceui/core/types';

@Directive({
  selector: '[ceuiResize]',
})
export class CeuiResizeDirective {
  @Input()
  @HostBinding('attr.resize')
  ceuiResize: Resize = 'both';

  constructor(
    private readonly _renderer2: Renderer2,
    private readonly _elementRef: ElementRef
  ) {}
}
