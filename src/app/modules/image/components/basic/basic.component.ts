import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
})
export class BasicComponent implements OnInit, AfterViewInit {
  imgList = [
    { src: `https://img2.baidu.com/it/u=325567737,3478266281&fm=26&fmt=auto&gp=0.jpg` },
    { src: `https://img1.baidu.com/it/u=3041604093,3909442121&fm=26&fmt=auto&gp=0.jpg` },
    { src: `https://img2.baidu.com/it/u=1325995315,4158780794&fm=26&fmt=auto&gp=0.jpg` },
    { src: `https://img0.baidu.com/it/u=1721234188,3646752315&fm=26&fmt=auto&gp=0.jpg` },
    { src: `https://img0.baidu.com/it/u=2707928180,2720343818&fm=26&fmt=auto&gp=0.jpg` },
    { src: `https://img2.baidu.com/it/u=3233789257,2569021433&fm=26&fmt=auto&gp=0.jpg` },
    { src: `https://img0.baidu.com/it/u=1344458356,2176233278&fm=26&fmt=auto&gp=0.jpg` },
    { src: `https://img1.baidu.com/it/u=2377483370,184071293&fm=26&fmt=auto&gp=0.jpg` },
    { src: `https://img2.baidu.com/it/u=2799619781,2076819262&fm=26&fmt=auto&gp=0.jpg` },
    { src: `https://img0.baidu.com/it/u=4080708447,959037841&fm=26&fmt=auto&gp=0.jpg` },
    { src: `https://img0.baidu.com/it/u=3986413553,892140686&fm=26&fmt=auto&gp=0.jpg` },
    { src: `https://img1.baidu.com/it/u=1306810397,13881722&fm=26&fmt=auto&gp=0.jpg` },
    { src: `https://img0.baidu.com/it/u=785875600,709667099&fm=26&fmt=auto&gp=0.jpg` },
    { src: `https://img0.baidu.com/it/u=1929093953,3703728428&fm=26&fmt=auto&gp=0.jpg` },
    { src: `https://img0.baidu.com/it/u=2856712432,738047093&fm=11&fmt=auto&gp=0.jpg` },
    { src: `https://img0.baidu.com/it/u=2707928180,2720343818&fm=26&fmt=auto&gp=0.jpg` },
    { src: `https://img2.baidu.com/it/u=3233789257,2569021433&fm=26&fmt=auto&gp=0.jpg` },
    { src: `https://img2.baidu.com/it/u=4097289208,3792582785&fm=26&fmt=auto&gp=0.jpg` },
    { src: `https://img2.baidu.com/it/u=1054710898,1545206044&fm=26&fmt=auto&gp=0.jpg` },
    { src: `https://img1.baidu.com/it/u=1728330326,3511907307&fm=11&fmt=auto&gp=0.jpg` },
  ];

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {}
}
