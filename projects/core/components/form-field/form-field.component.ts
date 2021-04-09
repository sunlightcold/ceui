import { AfterViewInit, Component, ContentChild, Input, OnInit } from '@angular/core';
import { AbstractControlDirective, NgControl } from '@angular/forms';
import { fallbackValue } from '@ceui/cdk/utils';

@Component({
  selector: 'ceui-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
})
export class CeuiFormFieldComponent implements OnInit, AfterViewInit {
  @Input()
  width!: string;

  @ContentChild(NgControl)
  control!: NgControl;

  get invalid() {
    return this.control ? fallbackValue<boolean>(this.control.invalid, false) : false;
  }

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    console.log(this.control);
  }
}
