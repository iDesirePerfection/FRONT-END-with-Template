import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddenterprisePageComponent } from './addenterprise-page.component';

describe('AddenterprisePageComponent', () => {
  let component: AddenterprisePageComponent;
  let fixture: ComponentFixture<AddenterprisePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddenterprisePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddenterprisePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
