import { Component, OnInit } from '@angular/core';
import { CeuiRadioChange } from '@ceui/core/components';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
})
export class BasicComponent implements OnInit {
  selected = '1';

  constructor() {}

  ngOnInit(): void {}

  onChange(event: CeuiRadioChange) {
    console.log('ceuiRadioChange', event);
  }

  onNgModelChange(value: string) {
    console.log('ngModelChange', value);
  }

  onSetClick() {
    this.selected = '3';
  }

  onGetClick() {
    console.log(this.selected);
  }
}
