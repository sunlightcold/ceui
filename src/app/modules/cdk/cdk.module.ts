import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkRoutingModule } from './cdk-routing.module';
import { DemoComponent } from './pages/demo/demo.component';
import { PureComponent } from './components/pure/pure.component';

@NgModule({
  declarations: [
    DemoComponent,
    PureComponent,
  ],
  imports: [
    CommonModule,
    CdkRoutingModule,
  ],
  providers: [
  ]
})
export class CdkModule { }
