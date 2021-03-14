import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * 在 destroy 生命周期取消订阅，配合 takeUntil 操作符使用
 * !!!注意确保在使用的组件处 providers 此 service
 */
@Injectable()
export class DestroyService extends Subject<void> implements OnDestroy {
  ngOnDestroy(): void {
    this.next();
    this.complete();
  }
}
