import { OverlayRef } from '@angular/cdk/overlay';
import { Component, Inject, OnInit, Optional, Self } from '@angular/core';
import {
  CeuiToastConfig,
  CEUI_TOAST_CONFIG,
  CEUI_TOAST_DATA,
} from './toast.config';
import { ToastRef } from './toast.ref';

@Component({
  selector: 'ceui-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class CeuiToastComponent implements OnInit {
  get theme() {
    return this.config.theme;
  }

  get closable() {
    return this.config.closable;
  }
  constructor(
    @Optional()
    @Inject(CEUI_TOAST_DATA)
    public data: string,
    @Optional()
    @Inject(CEUI_TOAST_CONFIG)
    public config: Required<CeuiToastConfig>,
    private _toastRef: ToastRef
  ) {
    console.log(this.data, this.config, this._toastRef);
  }

  ngOnInit() {
    const { duration, sticky } = this.config;
    if (!sticky) {
      this.intervalClose(duration);
    }
  }

  intervalClose(duration: number) {
    setTimeout(() => {
      this._toastRef.close();
    }, duration);
  }

  onCloseEvent() {
    this._toastRef.close();
  }
}
