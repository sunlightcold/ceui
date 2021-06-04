import {
  AfterContentChecked,
  ApplicationRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { PureComponent } from '../../components/pure/pure.component';
import { CacheService } from '../../services/cache.service';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit, AfterContentChecked {
  show = true;

  constructor(
    private userService: UserService,
    public readonly cache: CacheService,
    public applicationRef: ApplicationRef,
  ) {}

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

  onClick(event: Event, arg1: string, arg2: string) {
    console.log(event, 'clickEvent', arg1, arg2);
  }

  ngAfterContentChecked() {
    // console.log('trigger checked');
  }
}
