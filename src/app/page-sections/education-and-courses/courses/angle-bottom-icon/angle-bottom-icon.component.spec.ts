import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngleBottomIconComponent } from './angle-bottom-icon.component';

describe('AngleBottomIconComponent', () => {
  let component: AngleBottomIconComponent;
  let fixture: ComponentFixture<AngleBottomIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngleBottomIconComponent],
    });
    fixture = TestBed.createComponent(AngleBottomIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
