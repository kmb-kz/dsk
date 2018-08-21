import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationChildsComponent } from './location-childs.component';

describe('LocationChildsComponent', () => {
  let component: LocationChildsComponent;
  let fixture: ComponentFixture<LocationChildsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationChildsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationChildsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
