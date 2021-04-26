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
    path: 'input',
    loadChildren: () => import('./modules/input/input.module').then(module => module.InputModule),
  },
  {
    path: 'form-field',
    loadChildren: () => import('./modules/form-field/form-field.module').then(module => module.FormFieldModule),
  },
  {
    path: 'toast',
    loadChildren: () => import('./modules/toast/toast.module').then(module => module.ToastModule),
  },
  {
    path: 'cascader',
    loadChildren: () => import('./modules/cascader/cascader.module').then(module => module.CascaderModule),
  },
  {
    path: '',
    redirectTo: 'cascader',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
