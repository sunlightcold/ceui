import { Component, OnInit } from '@angular/core';
import { CodeSourceData } from '@app/code';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit {
  constructor() {}
  basicSources: CodeSourceData[] = [
    {
      title: 'basic.component.html',
      language: 'xml',
      code: require('!!raw-loader!../../components/basic/basic.component.html'),
    },
    {
      title: 'basic.component.ts',
      language: 'typescript',
      code: require('!!raw-loader!../../components/basic/basic.component.ts'),
    },
    {
      title: 'container.component.html',
      language: 'xml',
      code: require('!!raw-loader!../../components/container/container.component.html'),
    },
    {
      title: 'container.component.ts',
      language: 'typescript',
      code: require('!!raw-loader!../../components/container/container.component.ts'),
    },
  ];
  ngOnInit(): void {}
}
