import { Injectable, Provider } from '@angular/core';
import { EventManager, EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';

const CeuiEvent = ['outZone', 'once', 'passive'];

/**
 * 额外的事件管理器
 * outZone，运行于 ngZone 之外
 * once 只监听一次事件
 * passive passive 参数
 */
@Injectable()
export class CeuiEventPluginService {
  manager!: EventManager;

  supports(eventName: string): boolean {
    const nameArr = eventName.split('.');
    const [, ...ceuiEventNameArr] = nameArr;
    return (
      !!ceuiEventNameArr.length &&
      ceuiEventNameArr.every(name => CeuiEvent.includes(name))
    );
  }

  addEventListener(
    element: HTMLElement,
    eventName: string,
    handler: (event: any) => void,
  ): () => void {
    const [nativeEventName, ...ceuiEventName] = eventName.split('.');

    const listener = () =>
      element.addEventListener(nativeEventName, handler as EventListener, {
        once: ceuiEventName.includes('once'),
        passive: ceuiEventName.includes('passive'),
      });

    if (ceuiEventName.includes('outZone')) {
      this.manager.getZone().runOutsideAngular(() => listener());
    } else {
      listener();
    }

    return () => element.removeEventListener(nativeEventName, handler);
  }
}

export const CeuiManagerPluginProvider: Provider = {
  provide: EVENT_MANAGER_PLUGINS,
  useClass: CeuiEventPluginService,
  multi: true,
};
