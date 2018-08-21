import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardversiondetailsComponent } from './standardversiondetails.component';

describe('StandardversionedetailsComponent', () => {
  let component: StandardversiondetailsComponent;
  let fixture: ComponentFixture<StandardversiondetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardversiondetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardversiondetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
