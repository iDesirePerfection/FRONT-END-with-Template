import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddenteventPageComponent } from './addentevent-page.component';

describe('AddenteventPageComponent', () => {
  let component: AddenteventPageComponent;
  let fixture: ComponentFixture<AddenteventPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddenteventPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddenteventPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
