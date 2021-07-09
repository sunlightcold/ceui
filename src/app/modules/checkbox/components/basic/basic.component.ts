import { Component, OnInit } from '@angular/core';
import { CeuiCheckboxChange } from '@ceui/core/components';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {
  selected = true;

  disabled = false;

  indeterminate = false;

  control = new FormControl(false);

  constructor() { }

  ngOnInit(): void {
  }

  onChange(event: CeuiCheckboxChange) {
    console.log('change', event);
  }

  onNgModelChange(value: boolean) {
    console.log('ngModelChange', value);
  }

  onGet() {
    console.log(this.selected);
    console.log(this.control.value);
  }

  onSet() {
    this.selected = !this.selected;
    this.control.setValue(!this.control.value);
  }

  onDisabled() {
    this.disabled = true;
    this.control.disable();
  }

  onEnabled() {
    this.disabled = false;
    this.control.enable();
  }

  onIndeterminate() {
    this.indeterminate = true;
  }
}
