import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildLocationsComponent } from './child-locations.component';

describe('ChildLocationsComponent', () => {
  let component: ChildLocationsComponent;
  let fixture: ComponentFixture<ChildLocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildLocationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
