import { OverlayRef } from '@angular/cdk/overlay';

export class ToastRef {
  public _overlayRef: OverlayRef;

  constructor(overlayRef: OverlayRef) {
    this._overlayRef = overlayRef;
  }

  isVisible() {
    return this._overlayRef && this._overlayRef.overlayElement;
  }

  close() {
    this._overlayRef.dispose();
  }

  getDOMRect(): DOMRect {
    return this._overlayRef.overlayElement.getBoundingClientRect();
  }
}
