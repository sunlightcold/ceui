import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ceuiTabLabel], [ceui-tab-label]',
})
// tslint:disable-next-line: directive-class-suffix
export class CeuiTabLabel {
  constructor(public templateRef: TemplateRef<any>) {}
}
