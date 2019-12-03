import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeventPageComponent } from './listevent-page.component';

describe('ListeventPageComponent', () => {
  let component: ListeventPageComponent;
  let fixture: ComponentFixture<ListeventPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeventPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeventPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
