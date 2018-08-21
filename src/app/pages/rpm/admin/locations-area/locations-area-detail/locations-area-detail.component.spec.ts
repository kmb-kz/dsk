import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsAreaDetailComponent } from './locations-area-detail.component';

describe('LocationsAreaDetailComponent', () => {
  let component: LocationsAreaDetailComponent;
  let fixture: ComponentFixture<LocationsAreaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationsAreaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsAreaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
