import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  imgList = [
    { src: `https://img2.baidu.com/it/u=325567737,3478266281&fm=26&fmt=auto&gp=0.jpgxx` },
    { src: `https://img1.baidu.com/it/u=3041604093,3909442121&fm=26&fmt=auto&gp=0.jpgxx` },
    { src: `https://img2.baidu.com/it/u=1325995315,4158780794&fm=26&fmt=auto&gp=0.jpgxxx` },
    { src: `https://img0.baidu.com/it/u=1721234188,3646752315&fm=26&fmt=auto&gp=0.jpgxx` },
    { src: `https://img0.baidu.com/it/u=2707928180,2720343818&fm=26&fmt=auto&gp=0.jpgxxx` },
    { src: `https://img2.baidu.com/it/u=3233789257,2569021433&fm=26&fmt=auto&gp=0.jpgxxx` },
    { src: `https://img0.baidu.com/it/u=1344458356,2176233278&fm=26&fmt=auto&gp=0.jpgxxx` },
    { src: `https://img1.baidu.com/it/u=2377483370,184071293&fm=26&fmt=auto&gp=0.jpgxxx` },
    { src: `https://img2.baidu.com/it/u=2799619781,2076819262&fm=26&fmt=auto&gp=0.jpgxxx` },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
