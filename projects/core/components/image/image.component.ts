import { ChangeDetectionStrategy, Component, ElementRef, Renderer2 } from '@angular/core';
import { isPresent } from '@ceui/cdk/utils';
import { CeuiImageLazyDirective } from './image-lazy.directive';

@Component({
  selector: 'ceui-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  host: {
    class: `ceui-image`,
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CeuiImageComponent extends CeuiImageLazyDirective {
  constructor(_elementRef: ElementRef<HTMLImageElement>, _renderer2: Renderer2) {
    super(_elementRef, _renderer2);
  }

  loadImg() {
    if (isPresent(this.dataSrc)) {
      const imgElement = this._renderer2.createElement('img');
      this._renderer2.setAttribute(imgElement, 'src', this.dataSrc);
      this._renderer2.appendChild(this.hostElement, imgElement);
      const removeLoadEvent = this._renderer2.listen(imgElement, 'load', (event: Event) => {
        removeLoadEvent();
      });
      const removeErrorEvent = this._renderer2.listen(imgElement, 'error', (event: Event) => {
        if (isPresent(this.errorSrc)) {
          this._renderer2.setAttribute(imgElement, 'src', this.errorSrc);
          removeErrorEvent();
        }
      });
    }
  }
}
