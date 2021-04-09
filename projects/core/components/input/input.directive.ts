import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[ceuiInput], [ceui-input]',
})
export class CeuiInputDirective {
  @HostBinding('class.ceui-input') ceuiInput = true;
}
