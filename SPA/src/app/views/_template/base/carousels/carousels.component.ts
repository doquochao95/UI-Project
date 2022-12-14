import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-carousels',
  templateUrl: './carousels.component.html',
  styleUrls: ['./carousels.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: true } },
  ],
})
export class CarouselsComponent implements OnInit {
  myInterval: number = 6000;
  slides: any[] = [];
  activeSlideIndex: number = 0;
  noWrapSlides: boolean = false;
  constructor() {
    for (let i = 0; i < 4; i++) {
      this.addSlide();
    }
  }

  ngOnInit(): void {}
  addSlide(): void {
    this.slides.push({
      image: `https://loremflickr.com/900/500/sailing?random=${
        (this.slides.length % 8) + 1
      }/`,
    });
  }

  removeSlide(index?: number): void {
    const toRemove = index ? index : this.activeSlideIndex;
    this.slides.splice(toRemove, 1);
  }
}
