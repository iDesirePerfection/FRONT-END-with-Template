import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverCompaniesComponent } from './discover-companies.component';

describe('DiscoverCompaniesComponent', () => {
  let component: DiscoverCompaniesComponent;
  let fixture: ComponentFixture<DiscoverCompaniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoverCompaniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
