import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss']
})
export class TabGroupComponent {

  selectedIndex = 0;

  canTabActivate(index: number): boolean {
    return true;
  }

  selectTab(): void {
    this.selectedIndex = 2;
  }

  onSelectedIndexChange(index: number): void {
    this.selectedIndex = index;
  }
}
