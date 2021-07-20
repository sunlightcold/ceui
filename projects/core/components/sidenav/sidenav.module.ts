import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeuiSidenavComponent } from './sidenav.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { CeuiSidenavService } from './sidenav.service';
import { CeuiSidenavContainerComponent } from './sidenav-container.component';
import { PortalModule } from '@angular/cdk/portal';

@NgModule({
  declarations: [
    CeuiSidenavComponent,
    CeuiSidenavContainerComponent,
  ],
  imports: [
    CommonModule,
    OverlayModule,
    PortalModule,
  ],
  exports: [
    CeuiSidenavComponent,
  ],
  providers: [
    CeuiSidenavService,
  ]
})
export class CeuiSidenavModule { }
