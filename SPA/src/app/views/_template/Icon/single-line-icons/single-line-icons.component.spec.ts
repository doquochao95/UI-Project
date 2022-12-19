import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleLineIconsComponent } from './single-line-icons.component';

describe('SingleLineIconsComponent', () => {
  let component: SingleLineIconsComponent;
  let fixture: ComponentFixture<SingleLineIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleLineIconsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleLineIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
