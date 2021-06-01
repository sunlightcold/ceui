import { Component, OnInit, AfterContentChecked, AfterViewChecked } from '@angular/core';
import { ceuiPure } from '@ceui/cdk';

@Component({
  selector: 'app-pure',
  templateUrl: './pure.component.html',
  styleUrls: ['./pure.component.scss'],
})
export class PureComponent implements OnInit, AfterContentChecked, AfterViewChecked {
  show = true;

  constructor() {}

  ngOnInit() {}

  @ceuiPure
  calculate(val: number) {
    console.log('调用 calculate');
    return val * val;
  }

  calculate1(val: number) {
    console.log('调用 calculate not pure');
    return val * val;
  }

  ngAfterContentChecked() {
    console.log('contentChecked');
  }

  ngAfterViewChecked() {
    console.log('viewChecked');
  }
}
