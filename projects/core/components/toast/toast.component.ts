import { animate, state, style, transition, trigger } from '@angular/animations';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  OnInit,
  Optional,
} from '@angular/core';
import { CeuiToastConfig, CEUI_TOAST_CONFIG, CEUI_TOAST_DATA } from './toast.config';
import { ToastRef } from './toast.ref';

@Component({
  selector: 'ceui-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('messageState', [
      state('visible', style({ transform: 'translateY(0)', opacity: 1 })),
      transition('void => *', [
        style({ transform: 'translateY(100%)', opacity: 0 }),
        animate('300ms ease-out'),
      ]),
      transition('* => void', [
        animate(
          '250ms ease-in',
          style({ height: 0, opacity: 0, transform: 'translateY(-100%)' }),
        ),
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
    private readonly _changeDetectorRef: ChangeDetectorRef,
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
