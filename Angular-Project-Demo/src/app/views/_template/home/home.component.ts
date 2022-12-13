import { HashLocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { person } from '../../../core/model/common.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public name: string = 'Do Quoc Hao';
  public age: number = 20;
  public standardage: number = 18;
  public student: Array<person> = [
    { name: 'do', age: 11, still: true, cash: 30 },
    { name: 'quoc', age: 18, still: true, cash: 50 },
    { name: 'hao', age: 20, still: true, cash: 10 },
    { name: 'dung', age: 30, still: true, cash: 100 },
  ];
  public schools = [
    { class: 'Choose Class', teacher: 'Teacher', students: ['Student'] },
    { class: 'a1', teacher: 'hong', students: ['nhan', 'dung', 'mai'] },
    { class: 'a2', teacher: 'huong', students: ['hoang', 'thuy', 'dat'] },
    { class: 'a3', teacher: 'hao', students: ['khiem', 'hung', 'phuoc'] },
    { class: 'a4', teacher: 'hanh', students: ['nhan', 'hao', 'mai'] },
    { class: 'a3', teacher: 'hung', students: ['nhan', 'khiem', 'vuong'] },
  ];
  public students: Array<string> = ['Student'];
  constructor() {}

  ngOnInit(): void {
    console.log('students ' + this.student);
  }
  public reset_name_age(): void {
    this.age = 20;
    this.name = 'Do Quoc Hao';
  }
  public changeSchool(event: any) {
    const cla = event.target.value;
    if (!cla) {
      return;
    }
    console.log('school', event.target.value);
    this.students = this.schools.find((i) => i.class == cla)?.students || [];
  }
}
