import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { interval, of } from 'rxjs';
import { UserService } from '../../services/user.service';
import { delay, mergeAll } from 'rxjs/operators';
import { CacheService } from '../../services/cache.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit, AfterContentChecked {
  constructor(private userService: UserService, public readonly cache: CacheService) {}

  ngOnInit(): void {
    // // interval(2000).subscribe(() => {
    // this.userService.getUserPoles().subscribe(res => {
    //   console.log(res);
    //   console.log(this.cache);
    // });
    // // });

    // const a$ = of(1000).pipe(delay(2000));
    // const b$ = of(2000).pipe(delay(3000));
    // of(a$, b$)
    //   .pipe(mergeAll())
    //   .subscribe(res => {
    //     console.log(res);
    //   });
  }

  onClick(event: MouseEvent, arg1: string, arg2: string) {
    console.log(event, 'clickEvent', arg1, arg2);
  }

  ngAfterContentChecked() {
    console.log('trigger checked');
  }
}
