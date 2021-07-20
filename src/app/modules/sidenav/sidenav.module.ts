import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidenavRoutingModule } from './sidenav-routing.module';
import { BasicComponent } from './components/basic/basic.component';
import { CodeModule } from '@app/code';
import { CeuiButtonModule, CeuiSidenavModule } from '@ceui/core/components';
import { DemoComponent } from './pages/demo/demo.component';
import { ContentComponent } from './components/content/content.component';

@NgModule({
  declarations: [
    BasicComponent,
    DemoComponent,
    ContentComponent,
  ],
  imports: [
    CommonModule,
    SidenavRoutingModule,
    CodeModule,
    CeuiSidenavModule,
    CeuiButtonModule,
  ]
})
export class SidenavModule { }
