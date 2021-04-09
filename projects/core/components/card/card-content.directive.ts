import { Directive, HostBinding, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ceui-card-title], [CeuiCardTitle]',
})
export class CeuiCardTitle {
  @HostBinding('class')
  class = 'ceui-card-title';

  constructor(public templateRef: TemplateRef<any>) {}
}

@Directive({
  selector: '[ceui-card-content], [CeuiCardContent]',
})
export class CeuiCardContent {}
