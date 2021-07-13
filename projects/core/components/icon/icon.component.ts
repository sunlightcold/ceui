import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'ceui-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  host: {
    class: 	`ceui-icon ceui-font`,
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CeuiIconComponent implements AfterViewInit {
  get element() {
    return this._elementRef.nativeElement;
  }

  constructor(private _elementRef: ElementRef<HTMLElement>, private _renderer2: Renderer2) {
  }

  ngAfterViewInit() {
    this._setClassName();
  }


  private _getInnerText(): string {
    return this._elementRef.nativeElement.innerText;
  }

  private _setClassName() {
    const className = `ceui-icon-${this._getInnerText()}`;
    this._renderer2.setProperty(this.element, 'innerText', '');
    this._renderer2.addClass(this.element, className);
  }
}
