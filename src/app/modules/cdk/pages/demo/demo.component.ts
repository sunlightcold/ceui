import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    interval(2000).subscribe(() => {
      this.userService.getUserPoles().subscribe(res => {
        console.log(res);
      });
    });
  }
}
