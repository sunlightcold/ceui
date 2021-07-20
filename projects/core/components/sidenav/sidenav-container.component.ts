import {
  BasePortalOutlet,
  CdkPortalOutlet,
  ComponentPortal,
  TemplatePortal,
} from '@angular/cdk/portal';
import { Component, ComponentRef, EmbeddedViewRef, ViewChild } from '@angular/core';

@Component({
  selector: 'ceui-sidenav-container',
  templateUrl: './sidenav-container.component.html',
  styleUrls: ['./sidenav-container.component.scss'],
})
export class CeuiSidenavContainerComponent extends BasePortalOutlet {
  @ViewChild(CdkPortalOutlet, { static: true }) _portalOutlet!: BasePortalOutlet;

  attachComponentPortal<T>(portal: ComponentPortal<T>): ComponentRef<T> {
    return this._portalOutlet.attachComponentPortal(portal);
  }
  attachTemplatePortal<C>(portal: TemplatePortal<C>): EmbeddedViewRef<C> {
    return this._portalOutlet.attachTemplatePortal(portal);
  }
}
