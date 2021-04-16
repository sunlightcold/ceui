import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, Inject, OnInit, Optional, ChangeDetectorRef } from '@angular/core';
import { CeuiToastConfig, CEUI_TOAST_CONFIG, CEUI_TOAST_DATA } from './toast.config';
import { ToastRef } from './toast.ref';

@Component({
  selector: 'ceui-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('EnterLeave', [
      state('flyIn', style({ transform: 'translateY(0)' })),
      transition(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate('200ms ease-in'),
      ]),
      transition(':leave', [
        animate('200ms ease-out', style({ transform: 'translateY(-100%)' })),
      ]),
    ]),
  ],
})
export class CeuiToastComponent implements OnInit {
  /**
   * 离开状态，用于触发动画
   */
  leaved = false;

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
    private readonly _toastRef: ToastRef,
    private readonly _changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    const { duration, sticky } = this.config;
    if (!sticky) {
      this._intervalClose(duration);
    }
  }

  private _intervalClose(duration: number) {
    setTimeout(() => this._close(), duration);
  }

  private _triggerLeavingAnimation() {
    this.leaved = true;
    this._changeDetectorRef.markForCheck();
  }

  private _close() {
    this._triggerLeavingAnimation();
    setTimeout(() => {
      this._toastRef.close();
    }, 300);
  }

  onCloseEvent() {
    this._close();
  }
}
