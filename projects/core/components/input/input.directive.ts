import { Directive } from '@angular/core';

@Directive({
  selector: '[ceuiInput], [ceui-input]',
  host: {
    class: 'ceui-input',
  },
})
export class CeuiInputDirective {}
