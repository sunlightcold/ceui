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

  colorSources: CodeSourceData[] = [
    { title: 'html', language: 'xml', code: require('!!raw-loader!../../components/color/color.component.html') },
    { title: 'typescript', language: 'typescript', code: require('!!raw-loader!../../components/color/color.component.ts') },
    { title: 'scss', language: 'scss', code: require('!!raw-loader!../../components/color/color.component.scss') },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
