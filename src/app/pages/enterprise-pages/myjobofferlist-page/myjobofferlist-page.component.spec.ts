import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyjobofferlistPageComponent } from './myjobofferlist-page.component';

describe('MyjobofferlistPageComponent', () => {
  let component: MyjobofferlistPageComponent;
  let fixture: ComponentFixture<MyjobofferlistPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyjobofferlistPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyjobofferlistPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
