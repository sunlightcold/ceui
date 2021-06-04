import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkRoutingModule } from './cdk-routing.module';
import { DemoComponent } from './pages/demo/demo.component';
import { PureComponent } from './components/pure/pure.component';
import { CeuiManagerPluginProvider } from '@ceui/cdk/services';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DemoComponent,
    PureComponent,
  ],
  imports: [
    CommonModule,
    CdkRoutingModule,
    FormsModule,
  ],
  providers: [
    CeuiManagerPluginProvider,
  ]
})
export class CdkModule { }
