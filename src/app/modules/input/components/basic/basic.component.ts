import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {
  value!: string;

  control = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }

  onNgModelChange(value: string) {
    console.log(value);
  }

  onButtonEvent(value: string) {
    this.value = value;
    console.log(this.value);
  }

}
