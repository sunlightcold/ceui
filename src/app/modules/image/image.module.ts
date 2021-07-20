import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageRoutingModule } from './image-routing.module';
import { CodeModule } from '@app/code';
import { DemoComponent } from './pages/demo/demo.component';
import { BasicComponent } from './components/basic/basic.component';
import { CeuiImageModule } from '@ceui/core/components';

@NgModule({
  declarations: [DemoComponent, BasicComponent],
  imports: [
    CommonModule,
    ImageRoutingModule,
    CodeModule,
    CeuiImageModule,
  ]
})
export class ImageModule { }
