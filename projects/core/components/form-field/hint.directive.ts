import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: 'ceui-hint',
  host: {
    'class': 'ceui-hint',
  },
})
export class CeuiHintDirective {}
