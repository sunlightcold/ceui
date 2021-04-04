import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './pages/demo/demo.component';

const routes: Routes = [
  {
    path: 'demo',
    component: DemoComponent,
  },
  {
    path: '',
    redirectTo: 'demo',
    pathMatch: 'full'
  },
];

export const TabsRoutingRoutes = RouterModule.forChild(routes);
