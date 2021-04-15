import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeuiToastComponent } from './toast.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { CeuiToastService } from './toast.service';

@NgModule({
  declarations: [
    CeuiToastComponent,
  ],
  imports: [
    CommonModule,
    OverlayModule,
  ],
  entryComponents: [
    CeuiToastComponent,
  ],
  providers: [
    CeuiToastService,
  ]
})
export class CeuiToastModule { }
