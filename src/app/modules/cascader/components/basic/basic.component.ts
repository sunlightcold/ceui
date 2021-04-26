import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
})
export class BasicComponent implements OnInit {
  options = [
    {
      key: '1',
      value: '广东省',
      children: [
        {
          key: '11',
          value: '广州市',
          children: [
            {
              key: '111',
              value: '天河区',
            },
            {
              key: '112',
              value: '荔湾区',
            },
            {
              key: '113',
              value: '白云区',
            },
          ],
        },
      ],
    },
    {
      key: '3',
      value: '湖南省',
      children: [
        {
          key: '33',
          value: '湖南xx市',
          children: [
            {
              key: '333',
              value: '湖南xx区',
            },
          ],
        },
      ],
    },
    {
      key: '5',
      value: '广西省',
      children: [
        {
          key: '55',
          value: '广西xx市',
          children: [
            {
              key: '555',
              value: '广西xx区',
            },
          ],
        },
      ],
    },
    {
      key: '6',
      value: '北京',
      children: [
        {
          key: '66',
          value: '北京xx区',
        },
      ],
    },
  ];

  selected: string[] = [];

  constructor() {}

  ngOnInit(): void {}

  onNgModelChange(event: string[]) {
    console.log(event);
  }
}
