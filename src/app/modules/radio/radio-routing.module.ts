import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './pages/demo/demo.component';

const routes: Routes = [
  {
    path:  `demo`,
    component: DemoComponent,
  },
  {
    path: '',
    redirectTo: 'demo',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RadioRoutingModule { }
