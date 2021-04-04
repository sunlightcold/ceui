import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'alert',
    loadChildren: () => import('./modules/alert/alert.module').then(module => module.AlertModule),
  },
  {
    path: 'tabs',
    loadChildren: () => import('./modules/tabs/tabs.module').then(module => module.TabsModule),
  },
  {
    path: 'card',
    loadChildren: () => import('./modules/card/card.module').then(module => module.CardModule),
  },
  {
    path: '',
    redirectTo: 'card',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
