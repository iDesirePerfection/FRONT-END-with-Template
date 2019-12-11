import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddjobofferPageComponent } from './addjoboffer-page.component';

describe('AddjobofferPageComponent', () => {
  let component: AddjobofferPageComponent;
  let fixture: ComponentFixture<AddjobofferPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddjobofferPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddjobofferPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
