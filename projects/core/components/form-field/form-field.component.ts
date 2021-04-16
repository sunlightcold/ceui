import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Input,
  OnInit,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { getSafeObjProp } from '@ceui/cdk/utils';

@Component({
  selector: 'ceui-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CeuiFormFieldComponent implements OnInit, AfterViewInit {
  @Input()
  width!: string;

  @ContentChild(NgControl)
  private readonly _ngControl!: NgControl;

  get invalid(): boolean {
    return getSafeObjProp<boolean>(
      this._ngControl,
      ({ invalid }) => invalid,
      false
    );
  }

  get valid(): boolean {
    return getSafeObjProp<boolean>(
      this._ngControl,
      ({ valid }) => valid,
      false
    );
  }

  get touched(): boolean {
    return getSafeObjProp<boolean>(
      this._ngControl,
      ({ touched }) => touched,
      false
    );
  }

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    console.log(this._ngControl);
  }
}
