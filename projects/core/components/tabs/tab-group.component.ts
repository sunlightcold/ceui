import { coerceNumberProperty } from '@angular/cdk/coercion';
import {
  AfterContentChecked,
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  OnInit,
  Output,
  QueryList,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
} from '@angular/core';
import { CeuiTabLabelWrapper } from './tab-label-wrapper';
import { CeuiTabComponent } from './tab.component';

@Component({
  selector: 'ceui-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CeuiTabGroupComponent
  implements OnInit, AfterContentChecked, AfterViewChecked {
  /**
   * 选中的 tab templateRef
   */
  selectedTabTemplateRef!: TemplateRef<any>;

  /**
   * 选中的 tab component
   */
  selectedTab!: CeuiTabComponent;

  /**
   * content 视图检查后选中的 tab index
   */
  private _indexToSelect = 0;

  /**
   * 初始选中的 tab 索引，默认 0，设置 _indexToSelect，用于在 AfterContentChecked 判断 tab 变更
   */
  @Input()
  get selectedIndex(): number | null {
    return this._selectedIndex;
  }
  set selectedIndex(index: number | null) {
    this._indexToSelect = coerceNumberProperty(index);
  }
  private _selectedIndex: number | null = null;

  /**
   * 控制 tab 是否能导航
   */
  @Input()
  canTabActivate!: (index: number) => boolean;

  /**
   * tab 对齐方式，默认 start
   */
  @Input()
  alignTab: 'start' | 'center' | 'end' = 'start';

  @ContentChildren(CeuiTabComponent)
  tabComponents!: QueryList<CeuiTabComponent>;

  @ViewChildren(CeuiTabLabelWrapper)
  tabLabelWrappers!: QueryList<CeuiTabLabelWrapper>;

  @ViewChild('linkBar', { static: true })
  linkBar!: ElementRef<HTMLElement>;

  /**
   * tab 变更时时发出的事件
   */
  @Output()
  readonly selectedTabChange = new EventEmitter<number>();

  /**
   * 输出 tab 变更时的索引，以实现 [(selectedIndex)] 选项绑定
   */
  @Output()
  readonly selectedIndexChange = new EventEmitter<number>();

  constructor(private _changeDetectorRef: ChangeDetectorRef, private _ngZone: NgZone) {}

  ngOnInit(): void {}

  ngAfterContentChecked(): void {
    if (this._selectedIndex !== this._indexToSelect) {
      this._selectedIndex = this._indexToSelect;
      this._setTab(this.tabComponents.toArray()[this._indexToSelect]);

      // 运行更改检测后更改这些值，因为选中的内容可能包含对它们的引用
      Promise.resolve().then(() => {
        this.selectedIndexChange.emit(this._indexToSelect);
      });
    }
  }

  ngAfterViewChecked(): void {
    if (this._selectedIndex === this._indexToSelect) {
      this._setLinkBarStyle();
    }
  }

  /**
   * tab 选中事件
   */
  onSelectTab(index: number): void {
    let canActivate = true;
    if (typeof this.canTabActivate === 'function') {
      canActivate = this.canTabActivate(index);
    }
    if (canActivate) {
      this.selectedIndex = index;
    }
  }

  /**
   * 设置选中 tab 底部 link 样式
   */
  private _setLinkBarStyle() {
    const selectedLabelWrapper = this.tabLabelWrappers.toArray()[this._indexToSelect];
    const offsetLeft = selectedLabelWrapper.getOffsetLeft();
    const offsetWidth = selectedLabelWrapper.getOffsetWidth();
    this._ngZone.runOutsideAngular(() => {
      this.linkBar.nativeElement.style.left = offsetLeft + 'px';
      this.linkBar.nativeElement.style.width = offsetWidth + 'px';
      this.linkBar.nativeElement.style.visibility = this.selectedTab.disabled
        ? 'hidden'
        : 'visible';
    });
  }

  /**
   * 设置选中的 tab templateRef
   */
  private _setTab(tab: CeuiTabComponent) {
    if (tab instanceof CeuiTabComponent) {
      this.selectedTab = tab;
      this.selectedTabTemplateRef = tab.templateRef;
    }
  }
}
