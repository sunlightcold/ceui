import {
  ChangeDetectorRef,
  Directive,
  ElementRef,
  Inject,
  Optional,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { CeuiAbstractControl } from '@ceui/cdk/abstract';
import {
  CanColorCtor,
  CanDisabledCtor,
  mixinColor,
  mixinDisabled,
} from '@ceui/core/common';

@Directive()
export class CeuiCheckboxBase extends CeuiAbstractControl<boolean> {
  constructor(
    @Optional()
    @Inject(NgControl)
    _ngControl: NgControl,
    changeDetectorRef: ChangeDetectorRef,
    public _elementRef: ElementRef,
  ) {
    super(_ngControl, changeDetectorRef);
  }
}

export const MixinCeuiCheckboxBase: typeof CeuiCheckboxBase &
  CanColorCtor &
  CanDisabledCtor = mixinDisabled(mixinColor(CeuiCheckboxBase));
