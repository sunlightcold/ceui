import { Component } from '@angular/core';
import { CeuiDataSource } from 'projects/cdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  list = new Array(100).fill({ }).map((item, index) => ({ a: index }));

  filter: string | null = null;

  dataSource = new CeuiDataSource(this.list);

  ngModelChange(filter: string): void {
    this.dataSource.filter = filter;
  }

  onCloseEvent(): void {
    console.log('close');
  }
}
