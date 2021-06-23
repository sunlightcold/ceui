import { ThemePalette } from '@ceui/core/types';
import { Constructor } from './constructor';
import { ElementRef } from '@angular/core';

export interface CanColor {
  color: ThemePalette;
}

export type CanColorCtor = Constructor<CanColor>;

export interface HasElementRef {
  _elementRef: ElementRef;
}

export function mixinColor<T extends Constructor<HasElementRef>>(
  base: T,
  defaultTheme: ThemePalette = 'primary',
): T & CanColorCtor {
  return class extends base {
    get color() {
      return this._color;
    }
    set color(value: ThemePalette) {
      const colorPalette = value || defaultTheme;

      if (this._color !== colorPalette) {
        this._elementRef.nativeElement.classList.remove(`ceui-${this._color}`);
      }
      if (colorPalette) {
        this._elementRef.nativeElement.classList.add(`ceui-${colorPalette}`);
      }
      this._color = colorPalette;
    }
    private _color: ThemePalette;

    constructor(...arg: any[]) {
      super(...arg);
      this._color = defaultTheme;
    }
  };
}
