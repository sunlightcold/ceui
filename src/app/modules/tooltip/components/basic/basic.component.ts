import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {
  inputCtrl = new FormControl(null, Validators.required);

  constructor() { }

  ngOnInit(): void {
  }

}
