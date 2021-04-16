import { Component, OnInit } from '@angular/core';
import { CeuiToastService } from '@ceui/core/components';
import { ThemePalette } from '@ceui/core/types';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {

  constructor(private toastService: CeuiToastService) { }

  ngOnInit(): void {
  }

  open(theme: ThemePalette) {
    this.toastService.open('测试', { theme });
  }

}
