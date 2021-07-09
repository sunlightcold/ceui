import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogRoutingModule } from './dialog-routing.module';
import { BasicComponent } from './components/basic/basic.component';
import { DemoComponent } from './pages/demo/demo.component';
import { CeuiToastModule, CeuiButtonModule } from '@ceui/core/components';
import { ContainerComponent } from './components/container/container.component';
import { CeuiDialogModule } from '@ceui/core/components/dialog';
import { CeuiInputModule } from '@ceui/core/components/input';
import { CodeModule } from '@app/code';

@NgModule({
  declarations: [BasicComponent, DemoComponent, ContainerComponent],
  imports: [
    CommonModule,
    DialogRoutingModule,
    CeuiToastModule,
    CeuiButtonModule,
    CeuiDialogModule,
    CeuiInputModule,
    CodeModule,
  ],
  providers: [],
})
export class DialogModule {}
