import { Injectable, Injector, ViewContainerRef } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { CeuiToastComponent } from './toast.component';
import { ComponentPortal } from '@angular/cdk/portal';
import {
  CeuiToastConfig,
  CEUI_TOAST_CONFIG,
  CEUI_TOAST_CONFIG_DEFAULT,
  CEUI_TOAST_DATA,
} from './toast.config';
import { ToastRef } from './toast.ref';

@Injectable({
  providedIn: 'root',
})
export class CeuiToastService {
  constructor(
    private readonly _overlay: Overlay,
    private readonly _injector: Injector
  ) {}

  open(message: string, config?: CeuiToastConfig) {
    const overlayRef = this._overlay.create();
    const toastRef = new ToastRef(overlayRef);
    const portalInject = Injector.create({
      providers: [
        {
          provide: CEUI_TOAST_DATA,
          useValue: message,
        },
        {
          provide: CEUI_TOAST_CONFIG,
          useValue: this.getToastConfig(config),
        },
        {
          provide: ToastRef,
          useValue: toastRef,
        },
      ],
      parent: this._injector,
    });
    const componentPortal = new ComponentPortal(
      CeuiToastComponent,
      null,
      portalInject
    );
    overlayRef.attach(componentPortal);
  }

  getToastConfig(config?: CeuiToastConfig) {
    config = config || {};
    return { ...CEUI_TOAST_CONFIG_DEFAULT, ...config };
  }
}
