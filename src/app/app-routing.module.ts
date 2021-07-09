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
    path: 'cdk',
    loadChildren: () => import('./modules/cdk/cdk.module').then(module => module.CdkModule),
  },
  {
    path: 'accordion',
    loadChildren: () => import('./modules/accordion/accordion.module').then(module => module.AccordionModule),
  },
  {
    path: 'button',
    loadChildren: () => import('./modules/button/button.module').then(module => module.ButtonModule),
  },
  {
    path: 'tooltip',
    loadChildren: () => import('./modules/tooltip/tooltip.module').then(module => module.TooltipModule),
  },
  {
    path: 'radio',
    loadChildren: () => import('./modules/radio/radio.module').then(module => module.RadioModule),
  },
  {
    path: 'checkbox',
    loadChildren: () => import('./modules/checkbox/checkbox.module').then(module => module.CheckboxModule),
  },
  {
    path: '',
    redirectTo: 'alert',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
