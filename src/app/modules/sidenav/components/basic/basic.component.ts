import { Component, OnInit } from '@angular/core';
import { CeuiSidenavService } from '@ceui/core/components';
import { ContentComponent } from '../content/content.component';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {

  constructor(private _sidenav: CeuiSidenavService) { }

  ngOnInit(): void {
  }

  onClick() {
    this._sidenav.open(ContentComponent, { width: `1000px` });
  }

}
