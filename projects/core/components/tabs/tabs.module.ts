import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeuiTabComponent } from './tab.component';
import { CeuiTabGroupComponent } from './tab-group.component';
import { CeuiTabLabel } from './tab-label';
import { PortalModule } from '@angular/cdk/portal';
import { CeuiTabLabelWrapper } from './tab-label-wrapper';

@NgModule({
   imports: [
      CommonModule,
      PortalModule
   ],
   declarations: [
      CeuiTabComponent,
      CeuiTabGroupComponent,
      CeuiTabLabel,
      CeuiTabLabelWrapper
   ],
   exports: [
      CeuiTabComponent,
      CeuiTabGroupComponent,
      CeuiTabLabel
   ]
})
export class CeuiTabsModule { }
