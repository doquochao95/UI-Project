import { CommonService } from './../../../core/service/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  public color: string = 'lightgreen';
  public loginName: string = 'user';
  public counter: number = 0;
  constructor(private common:CommonService) {}

  ngOnInit(): void {}
  public counting(){
    this.counter = this.common.counting(this.counter)
  }
}
