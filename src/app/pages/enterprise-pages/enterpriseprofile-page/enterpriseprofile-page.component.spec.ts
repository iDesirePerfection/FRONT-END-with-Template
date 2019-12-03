import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseprofilePageComponent } from './enterpriseprofile-page.component';

describe('EnterpriseprofilePageComponent', () => {
  let component: EnterpriseprofilePageComponent;
  let fixture: ComponentFixture<EnterpriseprofilePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterpriseprofilePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseprofilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
