import { Constructor } from './constructor';

export interface CanDisabled {
  disabled: boolean;
}

export type CanDisabledCtor = Constructor<CanDisabled>;

export function mixinDisabled<T extends Constructor<any>>(base: T): T & CanDisabledCtor {
  return class extends base {
    get disabled() {
      return this._disabled;
    }
    set disabled(value: boolean) {
      this._disabled = value;
    }
    private _disabled = false;

    constructor(...arg: any[]) {
      super(...arg);
    }
  };
}
