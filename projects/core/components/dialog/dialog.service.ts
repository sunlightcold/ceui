import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import {
  ComponentFactoryResolver,
  Injectable,
  Injector,
  StaticProvider,
} from '@angular/core';
import { CEUI_DIALOG_DATA, CeuiDialogConfig } from './dialog.config';
import { ComponentType } from '@angular/cdk/portal/portal';
import { DialogRef } from './dialog.ref';
import { DialogComponent } from './dialog.component';
@Injectable({
  providedIn: 'root',
})
export class CeuiDialogService {
  constructor(
    private readonly _overlay: Overlay,
    private readonly _injector: Injector,
    private readonly _componentFactoryResolver: ComponentFactoryResolver
  ) {}

  open<T, C = any, D = any>(
    component: ComponentType<T>,
    config: CeuiDialogConfig<C>
  ) {
    config = this._getDialogConfig(config);

    const positionStrategy = this._overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();

    const overlayRef = this._overlay.create({ ...config, positionStrategy });

    const dialogRef = new DialogRef<D>(overlayRef);

    const portalInject = this._getPortalInject(config.data, dialogRef);

    const userProfilePortal = new ComponentPortal(
      DialogComponent,
      null,
      portalInject
    );

    const dialogContainer = overlayRef.attach(userProfilePortal).instance;

    const contentRef = dialogContainer.attachComponentPortal<T>(
      new ComponentPortal(component)
    );

    if (config.backdropClickClose) {
      overlayRef.backdropClick().subscribe((res) => {
        dialogRef.close();
      });
    }
    return dialogRef;
  }

  private _getPortalInject(data: any, dialogRef: DialogRef) {
    return Injector.create({
      providers: this._createInjector(data, dialogRef),
      parent: this._injector,
    });
  }

  private _createInjector(data: any, dialogRef: DialogRef): StaticProvider[] {
    return [
      {
        provide: CEUI_DIALOG_DATA,
        useValue: data,
      },
      {
        provide: DialogRef,
        useValue: dialogRef,
      },
    ];
  }

  private _getDialogConfig(config?: CeuiDialogConfig): CeuiDialogConfig {
    config = config || ({} as CeuiDialogConfig);
    return { ...new CeuiDialogConfig(), ...config };
  }
}
