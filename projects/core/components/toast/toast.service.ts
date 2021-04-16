import {
  GlobalPositionStrategy,
  Overlay,
  OverlayConfig,
  PositionStrategy,
} from '@angular/cdk/overlay';
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

    const portalInject = Injector.create({
      providers: this._createInjector(message, toastRef, config),
      parent: this._injector,
    });

    const componentPortal = new ComponentPortal(CeuiToastComponent, null, portalInject);
    overlayRef.attach(componentPortal);
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
    const lowerCase = direction?.toLocaleLowerCase();
    const strategy = this._overlay.position().global();
    if (lowerCase?.includes('top')) {
      strategy.top().centerVertically();
    }
    if (lowerCase?.includes('left')) {
      strategy.left().centerVertically();
    }
    if (lowerCase?.includes('bottom')) {
      strategy.bottom().centerVertically();
    }
    if (lowerCase?.includes('right')) {
      strategy.right().centerVertically();
    }
    if (lowerCase?.includes('center')) {
      strategy.centerHorizontally().centerVertically();
    }
    return strategy;
  }
}
