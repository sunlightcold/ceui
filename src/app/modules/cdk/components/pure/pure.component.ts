import {
  Component,
  OnInit,
  AfterContentChecked,
  AfterViewChecked,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ceuiPure } from '@ceui/cdk';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-pure',
  templateUrl: './pure.component.html',
  styleUrls: ['./pure.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PureComponent implements OnInit, AfterContentChecked, AfterViewChecked {
  show = true;

  num = 40;

  @ceuiPure
  get sum() {
    console.log('getter be invoked');
    return Math.pow(this.num, 2);
  }

  get sum1() {
    console.log('getter be invoked not pure');
    return Math.pow(this.num, 2);
  }

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

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
