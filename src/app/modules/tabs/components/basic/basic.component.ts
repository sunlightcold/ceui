import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent {

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
