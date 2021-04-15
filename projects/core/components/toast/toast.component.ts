import { Component, Inject, OnInit, Optional, Self } from '@angular/core';
import { CeuiToastConfig, CEUI_TOAST_CONFIG, CEUI_TOAST_DATA } from './toast.config';

@Component({
  selector: 'ceui-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  providers: [],
})
export class CeuiToastComponent implements OnInit {
  get theme(): string {
    return this.config?.theme;
  }

  constructor(
    @Optional()
    @Inject(CEUI_TOAST_DATA)
    public data: string,
    @Optional()
    @Inject(CEUI_TOAST_CONFIG)
    public config: CeuiToastConfig,
  ) {
    console.log(this.data, this.config);
  }

  ngOnInit() {}
}
