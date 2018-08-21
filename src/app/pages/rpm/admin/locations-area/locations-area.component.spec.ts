import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsAreaComponent } from './locations-area.component';

describe('LocationsAreaComponent', () => {
  let component: LocationsAreaComponent;
  let fixture: ComponentFixture<LocationsAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationsAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
