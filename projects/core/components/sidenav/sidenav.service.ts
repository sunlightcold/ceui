import { ComponentType, Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { CeuiSidenavContainerComponent } from './sidenav-container.component';
import { SidenavConfig } from './sidenav.config';

@Injectable()
export class CeuiSidenavService {
  constructor(private _overlay: Overlay) {}

  open<T = any, R = any>(
    component: ComponentType<T>,
    config?: SidenavConfig<R>
  ) {
    config = this._getOverlayConfig(config);
    const positionStrategy = this._overlay.position().global().left().top();
    const overlayConfig = new OverlayConfig({ positionStrategy, ...config });
    const overlayRef = this._overlay.create(overlayConfig);

    const containerRef = overlayRef.attach(
      new ComponentPortal(CeuiSidenavContainerComponent)
    );

    const contentRef = containerRef.instance.attachComponentPortal<T>(
      new ComponentPortal(component)
    );
  }

  private _getOverlayConfig<T>(config?: SidenavConfig<T>): SidenavConfig<T> {
    config = config || {} as SidenavConfig<T>;
    return { ...new SidenavConfig<T>(), ...config };
  }
}
