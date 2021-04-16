import { Component, OnInit } from '@angular/core';
import { CeuiToastService } from '@ceui/core/components';
import { ThemePalette, Direction } from '@ceui/core/types';

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
    this.toastService.open(theme, { theme });
  }

  openSticky() {
    this.toastService.open('sticky', { sticky: true });
  }

  openDirection(direction: Direction) {
    this.toastService.open(direction, { direction });
  }
}
