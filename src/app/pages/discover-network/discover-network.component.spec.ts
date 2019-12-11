import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverNetworkComponent } from './discover-network.component';

describe('DiscoverNetworkComponent', () => {
  let component: DiscoverNetworkComponent;
  let fixture: ComponentFixture<DiscoverNetworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoverNetworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
