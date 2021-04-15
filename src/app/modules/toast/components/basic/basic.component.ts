import { Component, OnInit } from '@angular/core';
import { CeuiToastService } from '@ceui/core/components';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {

  constructor(private toastService: CeuiToastService) { }

  ngOnInit(): void {
  }

  open() {
    this.toastService.open('测试', { theme: 'primary' });
  }

}
