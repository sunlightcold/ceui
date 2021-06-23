import { ElementRef } from '@angular/core';
import {
  CanColorCtor,
  CanDisabledCtor,
  mixinColor,
  mixinDisabled,
} from '@ceui/core/common';

export class CeuiButtonBase {
  constructor(public _elementRef: ElementRef) {}
}

export const MixinCeuiButtonBase: CanColorCtor & CanDisabledCtor & typeof CeuiButtonBase =
  mixinDisabled(mixinColor(CeuiButtonBase));
