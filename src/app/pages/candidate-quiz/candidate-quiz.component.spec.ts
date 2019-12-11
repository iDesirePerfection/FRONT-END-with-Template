import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateQuizComponent } from './candidate-quiz.component';

describe('CandidateQuizComponent', () => {
  let component: CandidateQuizComponent;
  let fixture: ComponentFixture<CandidateQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
