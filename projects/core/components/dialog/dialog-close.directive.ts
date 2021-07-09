import { Directive, Optional } from '@angular/core';
import { DialogRef } from './dialog.ref';

@Directive({
  selector: '[ceuiDialogClose], [ceui-dialog-close]',
  host: {
    class: `ceui-dialog-close`,
    '(click)': '_onButtonClick()',
  },
})
export class CeuiDialogCloseDirective {
  constructor(@Optional() private _dialogRef: DialogRef) {}

  _onButtonClick() {
    this._dialogRef.close();
  }
}
