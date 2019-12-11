import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewTrainingComponent } from './interview-training.component';

describe('InterviewTrainingComponent', () => {
  let component: InterviewTrainingComponent;
  let fixture: ComponentFixture<InterviewTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
