import { Component, OnInit } from '@angular/core';
import { CeuiDialogService } from '@ceui/core/components/dialog/dialog.service';
import { CeuiDialogConfig } from '@ceui/core/components';
import { ContainerComponent } from '@app/dialog/components/container/container.component';
import { CeuiToastService } from '@ceui/core/components/toast';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
})
export class BasicComponent implements OnInit {
  title = '测试';

  constructor(
    public _overlay: CeuiDialogService,
    private toastService: CeuiToastService
  ) {}

  ngOnInit(): void {}

  open() {
    const config: CeuiDialogConfig = {
      backdropClickClose: true,
      data: { title: this.title },
    };
    this._overlay
      .open<ContainerComponent, any, any>(ContainerComponent, config)
      .afterClosed.pipe(filter((val) => !!val))
      .subscribe((res) => this.toastService.open(res, { theme: 'success' }));
  }
}
