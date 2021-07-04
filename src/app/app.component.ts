import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { CeuiAccordionItemChange, CeuiAccordionOption } from '@ceui/core/components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  sessionKey = 'componentList';

  componentList: CeuiAccordionOption[] = [
    {
      title: `通用`,
      isExpand: true,
      children: [
        {
          title: `Alert 警告`,
          active: true,
          router: `alert`,
        },
        {
          title: `Button 按钮`,
          router: `button`,
        },
        {
          title: `Card 卡片`,
          router: `card`,
        },
        {
          title: `Dialog 弹窗`,
          router: `dialog`,
        },

        {
          title: `Icon 图标`,
          router: `icon`,
        },
        {
          title: `Tabs 选项卡`,
          router: `tabs`,
        },
        {
          title: `Toast 通知`,
          router: `toast`,
        },
        {
          title: `Tooltip 提示`,
          router: `tooltip`,
        },
      ],
    },
    {
      title: `导航`,
      isExpand: true,
      children: [
        {
          title: `Accordion 手风琴`,
          router: `accordion`,
        },
      ],
    },
    {
      title: `表单`,
      isExpand: true,
      children: [
        {
          title: `Cascader 级联`,
          router: `cascader`,
        },
        {
          title: `FormField 表单字段`,
          router: `form-field`,
        },
        {
          title: `Input 输入框`,
          router: `input`,
        },
      ],
    },
  ];

  constructor(private _router: Router) {
    const cache = sessionStorage.getItem(this.sessionKey);
    if (typeof cache === 'string') {
      try {
        this.componentList = JSON.parse(cache);
      } catch (error) {
      }
    }
  }

  onItemChange(event: CeuiAccordionItemChange) {
    this._router.navigateByUrl(`${event.item.router}`);
    sessionStorage.setItem(this.sessionKey, JSON.stringify(this.componentList));
  }
}
