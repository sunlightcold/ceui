import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { isPresent } from '@ceui/cdk/utils';

@Directive()
export class CeuiImageLazyBase {
  get hostElement() {
    return this._elementRef.nativeElement;
  }

  @Input() root: Element | Document | undefined;

  @Input() threshold = 0;

  @Input()
  get dataSrc() {
    return this._dataSrc;
  }
  set dataSrc(dataSrc: string | undefined) {
    if (dataSrc !== this._dataSrc) {
      this._dataSrc = dataSrc;
      this._lazyObserver();
    }
  }
  private _dataSrc: string | undefined;

  @Input() rootMargin: string | undefined;

  @Input() errorSrc: string | undefined;

  constructor(protected _elementRef: ElementRef<HTMLImageElement>, protected _renderer2: Renderer2) {}

  private _lazyObserver() {
    const observer: IntersectionObserver = new IntersectionObserver(this._getCallBack(), {
      root: this.root as any,
      rootMargin: this.rootMargin,
      threshold: this.threshold,
    });
    observer.observe(this.hostElement);
  }

  private _getCallBack() {
    return (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(item => {
        if (item.isIntersecting) {
          this.loadImg();
          observer.unobserve(item.target);
        }
      });
    };
  }

  loadImg() {
    if (isPresent(this.dataSrc)) {
      this._renderer2.setAttribute(this.hostElement, 'src', this.dataSrc);
      const removeLoadEvent = this._renderer2.listen(this.hostElement, 'load', (event: Event) => {
        removeLoadEvent();
      });
      const removeErrorEvent = this._renderer2.listen(this.hostElement, 'error', (event: Event) => {
        if (isPresent(this.errorSrc)) {
          this._renderer2.setAttribute(this.hostElement, 'src', this.errorSrc);
          removeErrorEvent();
        }
      });
    }
  }
}

@Directive({
  selector: 'img[ceuiImageLazy], img[ceui-image-lazy]',
})
export class CeuiImageLazyDirective extends CeuiImageLazyBase {}
