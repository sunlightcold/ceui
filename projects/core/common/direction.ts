import { Constructor } from './constructor';
import { Direction } from '@ceui/core/types';
import { ConnectedPosition } from '@angular/cdk/overlay';

export interface CanDirection {
  direction: Direction;

  _getPosition(): ConnectedPosition;
}

export type CanDirectionCtor = Constructor<CanDirection>;

export function mixinDirection<T extends Constructor<any>>(
  base: T,
  defaultDirection: Direction = 'bottom'
): T & CanDirectionCtor {
  return class extends base {
    get direction() {
      return this._direction;
    }
    set direction(direction: Direction) {
      this._direction = direction;
    }
    private _direction: Direction = 'bottom';

    constructor(...arg: any[]) {
      super(...arg);
      this._direction = defaultDirection;
    }

    private _getPosition(): ConnectedPosition {
      switch (this.direction) {
        case 'top':
          return {
            originX: 'start',
            originY: 'top',
            overlayX: 'start',
            overlayY: 'bottom',
          };
        case 'right':
          return {
            originX: 'end',
            originY: 'center',
            overlayX: 'start',
            overlayY: 'center',
          };
        case 'left':
          return {
            originX: 'start',
            originY: 'center',
            overlayX: 'end',
            overlayY: 'center',
          };
        case 'topRight':
          return {
            originX: 'end',
            originY: 'top',
            overlayX: 'start',
            overlayY: 'bottom',
          };
        case 'topLeft':
          return {
            originX: 'start',
            originY: 'top',
            overlayX: 'end',
            overlayY: 'bottom',
          };
        case 'bottomLeft':
          return {
            originX: 'start',
            originY: 'bottom',
            overlayX: 'end',
            overlayY: 'top',
          };
        case 'bottomRight':
          return {
            originX: 'end',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'top',
          };
        case 'bottom':
        default:
          return {
            originX: 'start',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'top',
          };
      }
    }
  };
}
