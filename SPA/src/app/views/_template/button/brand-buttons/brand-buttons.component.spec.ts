import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandButtonsComponent } from './brand-buttons.component';

describe('BrandButtonsComponent', () => {
  let component: BrandButtonsComponent;
  let fixture: ComponentFixture<BrandButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
