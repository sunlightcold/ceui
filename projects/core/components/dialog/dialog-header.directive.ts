import { Directive } from '@angular/core';

@Directive({
  selector: '[ceuiDialogHeader], [ceui-dialog-header]',
  host: {
    class: `ceui-dialog-header`,
  },
})
export class CeuiDialogHeaderDirective {}
