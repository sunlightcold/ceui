import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageRoutingModule } from './image-routing.module';
import { CodeModule } from '@app/code';
import { DemoComponent } from './pages/demo/demo.component';
import { BasicComponent } from './components/basic/basic.component';
import { CeuiImageModule } from '@ceui/core/components';
import { InfoViewComponent } from './components/info-view/info-view.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [DemoComponent, BasicComponent, InfoViewComponent, ErrorComponent],
  imports: [
    CommonModule,
    ImageRoutingModule,
    CodeModule,
    CeuiImageModule,
  ]
})
export class ImageModule { }
