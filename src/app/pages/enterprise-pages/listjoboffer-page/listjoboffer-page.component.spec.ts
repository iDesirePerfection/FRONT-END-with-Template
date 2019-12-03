import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListjobofferPageComponent } from './listjoboffer-page.component';

describe('ListjobofferPageComponent', () => {
  let component: ListjobofferPageComponent;
  let fixture: ComponentFixture<ListjobofferPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListjobofferPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListjobofferPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
