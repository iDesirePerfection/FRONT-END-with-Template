import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntprofilePageComponent } from './entprofile-page.component';

describe('EntprofilePageComponent', () => {
  let component: EntprofilePageComponent;
  let fixture: ComponentFixture<EntprofilePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntprofilePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntprofilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
