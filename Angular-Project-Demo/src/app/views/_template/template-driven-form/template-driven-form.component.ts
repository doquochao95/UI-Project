import { CommonService } from '../../../core/service/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css'],
})
export class TemplateDrivenFormComponent implements OnInit {
  public name  = { firstname: 'do', lastname: 'hao' };
  constructor(private common: CommonService) {}

  ngOnInit(): void {}

  public submitData() {
    this.common.submit(this.name);
  }
}
