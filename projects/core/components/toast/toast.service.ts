import { Overlay, PositionStrategy } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable, Injector, StaticProvider } from '@angular/core';
import { CeuiToastComponent } from './toast.component';
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
  constructor(private readonly _overlay: Overlay, private readonly _injector: Injector) {}

  open(message: string, config?: CeuiToastConfig) {
    config = this._getToastConfig(config);

    const positionStrategy = this._getPositionStrategy(config);

    const overlayRef = this._overlay.create({ positionStrategy });

    const toastRef = new ToastRef(overlayRef);

    const portalInject = this._getPortalInject(message, toastRef, config);

    const componentPortal = new ComponentPortal(CeuiToastComponent, null, portalInject);
    overlayRef.attach(componentPortal);
  }

  private _getPortalInject(message: string, toastRef: ToastRef, config: CeuiToastConfig) {
    return Injector.create({
      providers: this._createInjector(message, toastRef, config),
      parent: this._injector,
    });
  }

  private _createInjector(
    message: string,
    toastRef: ToastRef,
    config: CeuiToastConfig,
  ): StaticProvider[] {
    return [
      {
        provide: CEUI_TOAST_DATA,
        useValue: message,
      },
      {
        provide: CEUI_TOAST_CONFIG,
        useValue: config,
      },
      {
        provide: ToastRef,
        useValue: toastRef,
      },
    ];
  }

  private _getToastConfig(config?: CeuiToastConfig): CeuiToastConfig {
    config = config || {};
    return { ...CEUI_TOAST_CONFIG_DEFAULT, ...config };
  }

  private _getPositionStrategy({ direction }: CeuiToastConfig): PositionStrategy {
    const strategy = this._overlay.position().global();
    switch (direction) {
      case 'top':
        strategy.top().centerHorizontally();
        break;
      case 'right':
        strategy.right().centerVertically();
        break;
      case 'bottom':
        strategy.bottom().centerHorizontally();
        break;
      case 'left':
        strategy.left().centerVertically();
        break;
      case 'topLeft':
        strategy.top().left();
        break;
      case 'topRight':
        strategy.top().right();
        break;
      case 'bottomLeft':
        strategy.bottom().left();
        break;
      case 'bottomRight':
        strategy.bottom().right();
        break;
      case 'center':
        strategy.centerVertically().centerHorizontally();
        break;
    }
    return strategy;
  }
}
