import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationConstructivesComponent } from './location-constructives.component';

describe('LocationConstructivesComponent', () => {
  let component: LocationConstructivesComponent;
  let fixture: ComponentFixture<LocationConstructivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationConstructivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationConstructivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
