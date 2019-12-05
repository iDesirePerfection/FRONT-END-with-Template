import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPackAdminComponent } from './edit-pack-admin.component';

describe('EditPackAdminComponent', () => {
  let component: EditPackAdminComponent;
  let fixture: ComponentFixture<EditPackAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPackAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPackAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
