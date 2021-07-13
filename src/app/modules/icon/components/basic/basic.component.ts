import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
})
export class BasicComponent implements OnInit {
  iconNames = [
    'unselected',
    'search',
    'selected',
    'arrow-left',
    'arrow-up',
    'arrow-down',
    'arrow-right',
    'close',
    'warning',
    'primary',
    'error',
    'success',
  ];

  constructor() {}

  ngOnInit(): void {}
}
