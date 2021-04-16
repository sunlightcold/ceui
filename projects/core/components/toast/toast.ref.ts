import { OverlayRef } from '@angular/cdk/overlay';

export class ToastRef {
  private _overlayRef: OverlayRef;

  constructor(overlayRef: OverlayRef) {
    this._overlayRef = overlayRef;
  }

  close() {
    this._overlayRef.dispose();
  }

  getDOMRect(): DOMRect {
    return this._overlayRef.overlayElement.getBoundingClientRect();
  }
}
