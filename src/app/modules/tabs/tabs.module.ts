import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './components/basic/basic.component';
import { CeuiTabsModule } from '@ceui/core/components';
import { DemoComponent } from './pages/demo/demo.component';
import { TabsRoutingRoutes } from './tabs-routing.routing';

@NgModule({
  declarations: [
    BasicComponent,
    DemoComponent,
  ],
  imports: [
    CommonModule,
    CeuiTabsModule,
    TabsRoutingRoutes,
  ],
})
export class TabsModule { }
