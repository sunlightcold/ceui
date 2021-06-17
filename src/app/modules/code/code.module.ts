import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightComponent } from './components/highlight/highlight.component';
import { CodeContainerComponent } from './components/code-container/code-container.component';
import { CeuiTabsModule } from '@ceui/core/components';

@NgModule({
  declarations: [
    HighlightComponent,
    CodeContainerComponent,
  ],
  imports: [
    CommonModule,
    CeuiTabsModule,
  ],
  exports: [
    HighlightComponent,
    CodeContainerComponent,
  ]
})
export class CodeModule { }
