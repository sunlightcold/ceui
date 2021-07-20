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
    // { title: 'scss', language: 'scss', code: require('!!raw-loader!../../components/basic/basic.component.scss') },
  ];

  infoViewSources: CodeSourceData[] = [
    { title: 'html', language: 'xml', code: require('!!raw-loader!../../components/info-view/info-view.component.html') },
    { title: 'typescript', language: 'typescript', code: require('!!raw-loader!../../components/info-view/info-view.component.ts') },
    { title: 'scss', language: 'scss', code: require('!!raw-loader!../../components/info-view/info-view.component.scss') },
  ];

  errorSource: CodeSourceData[] = [
    { title: 'html', language: 'xml', code: require('!!raw-loader!../../components/error/error.component.html') },
    { title: 'typescript', language: 'typescript', code: require('!!raw-loader!../../components/error/error.component.ts') },
    // { title: 'scss', language: 'scss', code: require('!!raw-loader!../../components/error/error.component.scss') },
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
