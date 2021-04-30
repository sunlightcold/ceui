import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkRoutingModule } from './cdk-routing.module';
import { DemoComponent } from './pages/demo/demo.component';


@NgModule({
  declarations: [
    DemoComponent,
  ],
  imports: [
    CommonModule,
    CdkRoutingModule,
  ],
  providers: [
  ]
})
export class CdkModule { }
