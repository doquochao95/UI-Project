import { Component, OnInit } from '@angular/core';
import { ProgressbarType } from 'ngx-bootstrap/progressbar';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
})
export class ProgressComponent implements OnInit {
  max: number = 200;
  showWarning: boolean = false;
  dynamic: number = 0;
  type: ProgressbarType = 'danger';

  stacked: any[] = [];

  timer: any = null;
  buttonCaption: string = 'Start';

  constructor() {
    this.random();
    this.randomStacked();
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
    // console.log(`onDestroy`, this.timer);
  }

  random(): void {
    const value = Math.floor(Math.random() * 100 + 1);
    let _type: ProgressbarType;

    if (value < 25) {
      _type = 'success';
    } else if (value < 50) {
      _type = 'info';
    } else if (value < 75) {
      _type = 'warning';
    } else {
      _type = 'danger';
    }

    this.showWarning = _type === 'danger' || _type === 'warning';
    this.dynamic = value;
    this.type = _type;
  }

  randomStacked(): void {
    const types = ['success', 'info', 'warning', 'danger'];

    this.stacked = [];
    const n = Math.floor(Math.random() * 4 + 1);
    for (let i = 0; i < n; i++) {
      const index = Math.floor(Math.random() * 4);
      const value = Math.floor(Math.random() * 27 + 3);
      this.stacked.push({
        value,
        type: types[index],
        label: value + ' %',
      });
    }
  }

  randomize(): void {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    } else {
      this.timer = setInterval(() => this.randomStacked(), 2000);
    }
    this.buttonCaption = this.timer ? 'Stop' : 'Start';
  }
  ngOnInit(): void {}
}
