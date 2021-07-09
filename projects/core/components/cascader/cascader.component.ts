import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostListener,
  Inject,
  Input,
  OnInit,
  Optional,
  Self,
  ViewChild,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { CeuiAbstractControl } from '@ceui/cdk/abstract';
import { DestroyService } from '@ceui/cdk/services';
import { fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {
  CascaderOption,
  CeuiCascaderTriggerComponent,
} from './cascader-trigger.component';

@Component({
  selector: 'ceui-cascader',
  templateUrl: './cascader.component.html',
  styleUrls: ['./cascader.component.scss'],
  providers: [DestroyService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CeuiCascaderComponent
  extends CeuiAbstractControl<string[]>
  implements OnInit {
  @Input()
  options!: CascaderOption<string>[];

  @Input() placeholder = '';

  @Input() panelWidth = '150px';

  @Input() separator = ' - ';

  @ViewChild(CeuiCascaderTriggerComponent)
  trigger!: CeuiCascaderTriggerComponent;

  @HostListener('click', ['$event'])
  clickEvent(event: MouseEvent) {
    event.stopPropagation();
    if (!this.ngDisabled) {
      this.trigger.openPanel();
    }
  }

  constructor(
    @Optional()
    @Self()
    @Inject(NgControl)
    _ngControl: NgControl,
    @Inject(ChangeDetectorRef)
    changeDetectorRef: ChangeDetectorRef,
    private readonly _destroy$: DestroyService,
    @Inject(DOCUMENT)
    private readonly _document: Document,
  ) {
    super(_ngControl, changeDetectorRef);
  }

  ngOnInit() {
    this._blurViewSubscription();
  }

  /**
   * 处理失去焦点点击关闭面板事件
   */
  private _blurViewSubscription() {
    fromEvent(this._document.documentElement, 'click')
      .pipe(takeUntil(this._destroy$))
      .subscribe(event => {
        this.trigger.closePanel();
      });
  }

  onValueChanges(value: string[]) {
    this.updateValue(value);
  }
}
