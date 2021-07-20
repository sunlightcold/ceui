import {
  Directive,
  Input,
  ElementRef,
  Renderer2,
  ViewContainerRef,
  ComponentFactoryResolver,
} from '@angular/core';

@Directive({
  selector: '[ceuiLoading]',
  host: {
    class: 'ceui-loading',
  },
})
export class CeuiLoadingDirective {
  get element() {
    return this._elementRef.nativeElement;
  }

  // @Input() ceuiLoading;

  constructor(
    private _elementRef: ElementRef,
    private _renderer2: Renderer2,
    private _vierContainerRef: ViewContainerRef,
    private _componentFactoryResolver: ComponentFactoryResolver,
  ) {}
}
