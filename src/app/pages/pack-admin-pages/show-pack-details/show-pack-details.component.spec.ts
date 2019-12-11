import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPackDetailsComponent } from './show-pack-details.component';

describe('ShowPackDetailsComponent', () => {
  let component: ShowPackDetailsComponent;
  let fixture: ComponentFixture<ShowPackDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPackDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPackDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
