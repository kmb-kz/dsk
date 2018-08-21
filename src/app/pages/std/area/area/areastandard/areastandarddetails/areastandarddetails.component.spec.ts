import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreastandarddetailsComponent } from './areastandarddetails.component';

describe('AreastandarddetailsComponent', () => {
  let component: AreastandarddetailsComponent;
  let fixture: ComponentFixture<AreastandarddetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreastandarddetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreastandarddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
