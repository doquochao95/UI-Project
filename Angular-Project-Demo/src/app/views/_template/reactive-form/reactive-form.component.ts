import { CommonService } from './../../../core/service/common.service';
import { PageNotFoundComponent } from './../page-not-found/page-not-found.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  public formData: FormGroup = new FormGroup({
    firstname: new FormControl('do'),
    lastname: new FormControl('hao'),
  });
  public formData2 = this.formbuilder.group({
    firstname: ['do'],
    lastname: ['hao'],
  });
  public formData3 = this.formbuilder.group({
    firstname: ['do', Validators.required],
    lastname: ['hao',Validators.required],
  });
  constructor(
    private common: CommonService,
    private formbuilder: FormBuilder
  ) {}

  ngOnInit(): void {}
  public submitData(): void {
    this.common.submit(this.formData.value);
  }
  public submitData2(): void {
    this.common.submit(this.formData2.value);
  }
  public submitData3(): void {
    this.common.submit(this.formData3.value);
  }
}
