import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { CeuiDialogHeaderDirective } from './dialog-header.directive';
import { CeuiDialogFooterDirective } from './dialog-footer.directive';
import { PortalModule } from '@angular/cdk/portal';
import { CeuiDialogService } from './dialog.service';
import { CeuiDialogCloseDirective } from './dialog-close.directive';

@NgModule({
  declarations: [
    DialogComponent,
    CeuiDialogCloseDirective,
    CeuiDialogHeaderDirective,
    CeuiDialogFooterDirective,
  ],
  imports: [CommonModule, PortalModule],
  exports: [
    DialogComponent,
    CeuiDialogCloseDirective,
    CeuiDialogHeaderDirective,
    CeuiDialogFooterDirective,
  ],
  providers: [CeuiDialogService],
})
export class CeuiDialogModule {}
