import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationAndCoursesComponent } from './education-and-courses.component';

describe('EducationAndCoursesComponent', () => {
  let component: EducationAndCoursesComponent;
  let fixture: ComponentFixture<EducationAndCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EducationAndCoursesComponent],
    });
    fixture = TestBed.createComponent(EducationAndCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
