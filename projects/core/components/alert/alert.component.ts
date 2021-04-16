import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ThemePalette } from '@ceui/core/types';

@Component({
  selector: 'ceui-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CeuiAlertComponent {
  /**
   * 可关闭的，显示关闭按钮，默认 false
   */
  @Input() closable = false;

  /**
   * alert 主题类型
   */
  @Input() type: ThemePalette = 'primary';

  /**
   * 显示主题图标，默认 true
   */
  @Input() showIcon = true;

  _hidden = false;

  @Output() closeEvent = new EventEmitter<void>();

  constructor() { }

  onCloseEvent(): void {
    this.closeEvent.emit();
    this._hidden = true;
  }
}
