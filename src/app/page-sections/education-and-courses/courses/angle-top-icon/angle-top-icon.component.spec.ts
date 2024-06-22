import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngleTopIconComponent } from './angle-top-icon.component';

describe('AngleTopIconComponent', () => {
  let component: AngleTopIconComponent;
  let fixture: ComponentFixture<AngleTopIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngleTopIconComponent],
    });
    fixture = TestBed.createComponent(AngleTopIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
