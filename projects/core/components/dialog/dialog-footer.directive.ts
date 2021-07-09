import { Directive } from '@angular/core';

@Directive({
  selector: '[ceuiDialogFooter], [ceui-dialog-footer]',
  host: {
    class: `ceui-dialog-footer`,
  },
})
export class CeuiDialogFooterDirective {}
