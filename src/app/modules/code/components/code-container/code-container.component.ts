import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { CodeSourceData } from './code-source-data';

@Component({
  selector: 'app-code-container',
  templateUrl: './code-container.component.html',
  styleUrls: ['./code-container.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CodeContainerComponent implements OnInit {
  expand = false;

  @Input() sources: CodeSourceData[] = [];

  constructor() {}

  ngOnInit() {}
}
