import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './components/basic/basic.component';
import { CeuiTabsModule } from '@ceui/core/components';
import { DemoComponent } from './pages/demo/demo.component';
import { TabsRoutingModule } from './tabs-routing.module';
import { CodeModule } from '../code/code.module';

@NgModule({
  declarations: [
    BasicComponent,
    DemoComponent,
  ],
  imports: [
    CommonModule,
    CeuiTabsModule,
    TabsRoutingModule,
    CodeModule,
  ],
})
export class TabsModule { }
