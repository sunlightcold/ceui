import { Injectable, Injector } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { CeuiToastComponent } from './toast.component';
import { ComponentPortal } from '@angular/cdk/portal';
import { CeuiToastConfig, CEUI_TOAST_CONFIG, CEUI_TOAST_DATA } from './toast.config';

@Injectable({
  providedIn: 'root',
})
export class CeuiToastService {
  constructor(private readonly _overlay: Overlay) {}

  open(message: string, config?: CeuiToastConfig) {
    const overlayRef = this._overlay.create();
    const portalInject = Injector.create({
      providers: [
        {
          provide: CEUI_TOAST_DATA,
          useValue: message,
        },
        {
          provide: CEUI_TOAST_CONFIG,
          useValue: config || {},
        }
      ],
    });
    const componentPortal = new ComponentPortal(CeuiToastComponent, null, portalInject);
    overlayRef.attach(componentPortal);
  }
}
