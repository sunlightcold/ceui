import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Inject,
  Input,
  Output
} from '@angular/core';
import { isLenArray } from '@ceui/cdk/utils';
import { BehaviorSubject, combineLatest, Subscription } from 'rxjs';

export interface CascaderOption<T> {
  key: T;

  value: string;

  children?: CascaderOption<T>[];
}

@Component({
  selector: 'ceui-cascader-trigger',
  templateUrl: './cascader-trigger.component.html',
  styleUrls: ['./cascader-trigger.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CeuiCascaderTriggerComponent {
  /**
   * 选中子节点的数据 map，包含所有选中过的子节点数据
   */
  selectedOptionMap = new Map<string, any>();

  /**
   * 通过操作视图，选中的 key list
   */
  viewKeys: string[] = [];

  /**
   * 面板状态
   */
  private _panelStatus = false;

  /**
   * 更新事件流对象
   */
  private _renderChangesSubscription: Subscription | null = null;

  /**
   * options 树形数据流
   */
  private readonly _options$ = new BehaviorSubject<any[]>([]);

  /**
   * 控制器值数据流
   */
  private readonly _value$ = new BehaviorSubject<string[]>([]);

  /**
   * 视图上显示的值
   */
  get viewValue(): string | null {
    if (isLenArray(this.value)) {
      const arr = this.value.map(key => this.selectedOptionMap.get(key)?.value);
      return arr.includes(undefined) ? null : arr.join(this.separator);
    }
    return null;
  }

  get isOpened(): boolean {
    return this._panelStatus;
  }

  @Input()
  get data(): any[] {
    return this._options$.value;
  }
  set data(options: any[]) {
    this._options$.next(options || []);

    if (!this._renderChangesSubscription) {
      this._updateChangeSubscription();
    }
  }

  @Input()
  get value(): string[] {
    return this._value$.value;
  }
  set value(value: string[]) {
    this._value$.next(value || []);
    this.viewKeys = this._arrayClone(value);

    if (!this._renderChangesSubscription) {
      this._updateChangeSubscription();
    }
  }

  @Input() panelWidth = '150px';

  @Input() separator = ' - ';

  @Output() valueChanges = new EventEmitter<string[]>();

  constructor(
    @Inject(ChangeDetectorRef)
    private readonly _changeDetectorRef: ChangeDetectorRef,
  ) {}

  /**
   * 选中数据事件
   * @param event 事件参数
   * @param item 选中数据
   * @param level 层级，从 0 开始
   */
  onChildNodeClick(event: Event, item: any, level: number) {
    event.stopPropagation();

    this.viewKeys[level] = item.key;
    this.viewKeys.splice(level + 1);
    this.selectedOptionMap.set(item.key, item);

    // 判断是否叶节点（isLeaf）
    const children = item.children;
    if (!children || !isLenArray(children)) {
      this._checkValueChanges();
      this.closePanel();
    }
  }

  openPanel() {
    this._panelStatus = true;
    this._changeDetectorRef.markForCheck();
  }

  closePanel() {
    this._panelStatus = false;
    this.viewKeys = this._arrayClone(this.value);
    this._changeDetectorRef.markForCheck();
  }

  togglePanel() {
    this._panelStatus = !this._panelStatus;
  }

  private _checkValueChanges() {
    const value = isLenArray(this.value) ? this.value : [];
    const viewKeys = isLenArray(this.viewKeys) ? this.viewKeys : [];
    if (value.join('') !== viewKeys.join('')) {
      this.value = this._arrayClone(this.viewKeys);
      this.valueChanges.emit(this.value);
    }
  }

  /**
   * 更新视图数据订阅
   */
  private _updateChangeSubscription() {
    const dataStream = this._options$;
    const selectStream = this._value$;
    // 订阅数据更改，获取最新的过滤数据流
    this._renderChangesSubscription?.unsubscribe();
    this._renderChangesSubscription = combineLatest([dataStream, selectStream]).subscribe(
      ([options, selected]) => {
        this._filterOptions$(options, selected, this.selectedOptionMap);
      },
    );
  }

  /**
   * 根据 key list 过滤选中的数据
   * @param options 树形数据
   * @param optionMap 选中数据 map
   * @returns 选中数据 map
   */
  private _filterOptions$(
    options: any[],
    selected: string[],
    optionMap: Map<string, any>,
  ): Map<string, any> {
    if (isLenArray(options)) {
      options.forEach(option => {
        const { key, children } = option;
        if (selected.includes(key)) {
          optionMap.set(key, option);
          this._filterOptions$(children, selected, optionMap);
        }
      });
    }

    return optionMap;
  }

  /**
   * 数组浅拷贝
   */
  private _arrayClone(arr: string[]): string[] {
    return [...(arr || [])];
  }
}
