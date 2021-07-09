import { OverlayRef } from '@angular/cdk/overlay';
import { Subject } from 'rxjs';

export class DialogRef<D = any> {
  public _overlayRef: OverlayRef;
  readonly afterClosed = new Subject<D | undefined>();

  constructor(overlayRef: OverlayRef) {
    this._overlayRef = overlayRef;
  }

  close(data?: D) {
    this._overlayRef.dispose();
    this.afterClosed.next(data);
  }
}
