import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReachOutToMeComponent } from './reach-out-to-me.component';

describe('ReachOutToMeComponent', () => {
  let component: ReachOutToMeComponent;
  let fixture: ComponentFixture<ReachOutToMeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReachOutToMeComponent],
    });
    fixture = TestBed.createComponent(ReachOutToMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
