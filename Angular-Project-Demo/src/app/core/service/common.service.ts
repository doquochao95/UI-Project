import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  public counter: number = 0;

  constructor() {}

  public counting(n: number): number {
    n++;
    this.counter = n;
    return n;
  }
  public submit(data: any): void {
    console.log('Data Submited : ', data);
  }
}
