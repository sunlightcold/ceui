import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardRoutingModule } from './card-routing.module';
import { BasicComponent } from './components/basic/basic.component';
import { DemoComponent } from './pages/demo/demo.component';
import { CeuiCardModule } from '@ceui/core/components';
import { CodeModule } from '@app/code';

@NgModule({
  declarations: [BasicComponent, DemoComponent],
  imports: [
    CommonModule,
    CardRoutingModule,
    CeuiCardModule,
    CodeModule,
  ]
})
export class CardModule { }
