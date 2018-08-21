import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationChildComponent } from './location-child.component';

describe('LocationChildComponent', () => {
  let component: LocationChildComponent;
  let fixture: ComponentFixture<LocationChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
