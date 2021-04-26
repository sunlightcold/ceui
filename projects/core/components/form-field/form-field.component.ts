import {
  AfterContentChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  HostBinding,
  Input,
  OnInit,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { getSafeObjProp } from '@ceui/cdk/utils';
import { QueryList, ViewEncapsulation } from '@angular/core';
import { CeuiSuffixDirective } from './suffix.directive';
import { CeuiPrefixDirective } from './prefix.directive';

@Component({
  selector: 'ceui-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CeuiFormFieldComponent implements OnInit, AfterContentChecked {
  @ContentChild(NgControl)
  private readonly _ngControl!: NgControl;

  @ContentChildren(CeuiSuffixDirective)
  suffixChildren!: QueryList<CeuiSuffixDirective>;

  @ContentChildren(CeuiPrefixDirective)
  prefixChildren!: QueryList<CeuiPrefixDirective>;

  @HostBinding('class._prefix')
  get hasPrefix(): boolean {
    return !!this.prefixChildren.length;
  }

  @HostBinding('class._suffix')
  get hasSuffix(): boolean {
    return !!this.suffixChildren.length;
  }

  @HostBinding('class.ceui-form-field')
  get ceuiFormField() {
    return true;
  }

  get invalid(): boolean {
    return getSafeObjProp<boolean>(this._ngControl, ({ invalid }) => invalid, false);
  }

  get valid(): boolean {
    return getSafeObjProp<boolean>(this._ngControl, ({ valid }) => valid, false);
  }

  get touched(): boolean {
    return getSafeObjProp<boolean>(this._ngControl, ({ touched }) => touched, false);
  }

  constructor(private readonly _changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit() {}

  ngAfterContentChecked() {
    this._changeDetectorRef.markForCheck();
  }
}
