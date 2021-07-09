import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef,
  EventEmitter,
  Inject,
  OnInit,
  Optional,
  ViewChild,
} from '@angular/core';
import {
  BasePortalOutlet,
  CdkPortalOutlet,
  ComponentPortal,
  TemplatePortal,
} from '@angular/cdk/portal';
import { CEUI_DIALOG_DATA } from './dialog.config';

@Component({
  selector: 'ceui-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent extends BasePortalOutlet implements OnInit {
  @ViewChild(CdkPortalOutlet, { static: true }) _portalOutlet!: CdkPortalOutlet;

  constructor(
    @Optional()
    @Inject(CEUI_DIALOG_DATA)
    public data: any
  ) {
    super();
  }

  ngOnInit() {
    console.log(this.data);
  }
  attachComponentPortal<T>(portal: ComponentPortal<T>): ComponentRef<T> {
    const componentRef = this._portalOutlet.attachComponentPortal(portal);
    return componentRef;
  }

  attachTemplatePortal<C>(portal: TemplatePortal<C>): EmbeddedViewRef<C> {
    const embeddedViewRef = this._portalOutlet.attachTemplatePortal(portal);
    return embeddedViewRef;
  }
}
