import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import Highlight from 'highlight.js/lib/common';
import { CodeLanguage } from '../code-container/code-language';

['xml', 'scss', 'typescript'].forEach((langName) => {
  // Using require() here because import() support hasn't landed in Webpack yet
  const langModule = require(`highlight.js/lib/languages/${langName}`);
  Highlight.registerLanguage(langName, langModule);
});

@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HighlightComponent implements OnInit, AfterViewInit {
  @Input() code = '';

  @Input() language: CodeLanguage = 'xml';

  @ViewChild('codeEl') codeEl!: ElementRef;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    Promise.resolve().then(() => {
      const code = Highlight.highlightAuto(this.code, [this.language]);
      this.code = code.value;
    });
  }
}
