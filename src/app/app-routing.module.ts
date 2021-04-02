import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertComponent } from './components/alert/alert.component';
import { TabGroupComponent } from './components/tab-group/tab-group.component';

const routes: Routes = [
  {
    path: 'alert',
    component: AlertComponent,
  },
  {
    path: 'tabs',
    component: TabGroupComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
