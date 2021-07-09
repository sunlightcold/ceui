import { Component, Inject, OnInit, Optional } from '@angular/core';
import {
  CEUI_DIALOG_DATA,
  CeuiDialogService,
  DialogRef,
} from '@ceui/core/components/dialog';
import { CeuiDialogConfig } from '@ceui/core/components';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  constructor(
    @Inject(CEUI_DIALOG_DATA) public data: any,
    public dialogRef: DialogRef
  ) {}

  ngOnInit(): void {}
  onClick(val: string) {
    this.dialogRef.close(val);
  }
}
