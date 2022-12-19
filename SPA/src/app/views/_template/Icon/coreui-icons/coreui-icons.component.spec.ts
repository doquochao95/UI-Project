import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreuiIconsComponent } from './coreui-icons.component';

describe('CoreuiIconsComponent', () => {
  let component: CoreuiIconsComponent;
  let fixture: ComponentFixture<CoreuiIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoreuiIconsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoreuiIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
