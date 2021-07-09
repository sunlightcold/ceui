import { Component, OnInit } from '@angular/core';
import { CeuiAccordionItemChange, CeuiAccordionMenuToggle, CeuiAccordionOption } from '@ceui/core/components';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
})
export class BasicComponent implements OnInit {
  source: CeuiAccordionOption[] = [
    {
      title: '测试1',
      isExpand: true,
      children: [
        {
          title: '测试11',
          children: [
            { title: '测试111' },
            { title: '测试111' },
            { title: '测试121' },
            { title: '测试131' },
            { title: '测试141' },
          ],
        },
        { title: '测试12', disabled: true },
        { title: '测试13', active: true },
        { title: '测试14' },
        { title: '测试15' },
      ],
    },
    {
      title: '测试2',
      disabled: true,
    },
    {
      title: '测试3',
      isExpand: false,
      children: [
        { title: '测试32', disabled: true },
        { title: '测试33', active: true },
        { title: '测试34' },
        { title: '测试35' },
      ],
    },
    {
      title: '测试4',
      active: true,
    },
    {
      title: '测试5',
    },
  ];

  constructor() {}

  ngOnInit() {}

  onItemChange(event: CeuiAccordionItemChange) {
    console.log(event);
  }

  onMenuToggle(event: CeuiAccordionMenuToggle) {
    console.log(event);
  }
}
