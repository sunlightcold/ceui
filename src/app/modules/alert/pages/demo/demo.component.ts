import { Component, OnInit } from '@angular/core';
import { CodeSourceData } from '@app/code';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  basicSources: CodeSourceData[] = [
    { title: 'html', language: 'xml', code: require('!!raw-loader!../../components/basic/basic.component.html') },
    { title: 'typescript', language: 'typescript', code: require('!!raw-loader!../../components/basic/basic.component.ts') },
    { title: 'scss', language: 'scss', code: require('!!raw-loader!../../components/basic/basic.component.scss') },
  ];

  withoutIconSources: CodeSourceData[] = [
    { title: 'html', language: 'xml', code: require('!!raw-loader!../../components/without-icon/without-icon.component.html') },
    { title: 'typescript', language: 'typescript', code: require('!!raw-loader!../../components/without-icon/without-icon.component.ts') },
    { title: 'scss', language: 'scss', code: require('!!raw-loader!../../components/without-icon/without-icon.component.scss') },
  ];

  closeSources: CodeSourceData[] = [
    { title: 'html', language: 'xml', code: require('!!raw-loader!../../components/close/close.component.html') },
    { title: 'typescript', language: 'typescript', code: require('!!raw-loader!../../components/close/close.component.ts') },
    { title: 'scss', language: 'scss', code: require('!!raw-loader!../../components/close/close.component.scss') },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
