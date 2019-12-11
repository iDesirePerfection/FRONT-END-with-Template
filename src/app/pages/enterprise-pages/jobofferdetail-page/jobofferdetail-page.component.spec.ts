import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobofferdetailPageComponent } from './jobofferdetail-page.component';

describe('JobofferdetailPageComponent', () => {
  let component: JobofferdetailPageComponent;
  let fixture: ComponentFixture<JobofferdetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobofferdetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobofferdetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
