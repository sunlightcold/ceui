import { Observable, of, Subject } from 'rxjs';
import { mergeAll, shareReplay, switchMap } from 'rxjs/operators';

export interface HttpCacheStorage {
  setItem(key: string, item: Observable<any>): void;
  getItem(key: string): Observable<any> | undefined;
}

export interface HttpCacheOptions {
  storage: HttpCacheStorage;
  refreshSubject: Observable<unknown> | Subject<unknown>;
}

export type HttpRequestCacheMethod<U = any> = (...args: any[]) => Observable<U>;

export function HttpRequestCache<T extends Record<string, any>, U = any>(
  optionsHandler: (this: any) => HttpCacheOptions,
) {
  return (
    target: T,
    methodName: string,
    descriptor: TypedPropertyDescriptor<HttpRequestCacheMethod<U>>,
  ): TypedPropertyDescriptor<HttpRequestCacheMethod<U>> => {

    if (!(descriptor?.value instanceof Function)) {
      throw Error(
        `'@HttpRequestCache' can be applied only to the class method which returns Observable`,
      );
    }

    const cacheKeyPrefix = `${target.constructor.name}_${methodName}`;
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]): Observable<U> {
      const { storage, refreshSubject } = optionsHandler.call(this);

      const key = `${cacheKeyPrefix}_${JSON.stringify(args)}`;
      let observable = storage.getItem(key);

      if (observable) {
        return observable;
      }

      observable = of(
        originalMethod.apply(this, args),
        refreshSubject.pipe(switchMap(() => originalMethod.apply(this, args))),
      ).pipe(mergeAll(), shareReplay(1));

      storage.setItem(key, observable);

      return observable;
    };

    return descriptor;
  };
}
