import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRegisteredCourseComponent } from './single-registered-course.component';

describe('SingleRegisteredCourseComponent', () => {
  let component: SingleRegisteredCourseComponent;
  let fixture: ComponentFixture<SingleRegisteredCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleRegisteredCourseComponent]
    });
    fixture = TestBed.createComponent(SingleRegisteredCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
