import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ceuiTabLabel], [ceui-tab-label]',
})
export class CeuiTabLabel {
  constructor(public templateRef: TemplateRef<any>) {}
}
