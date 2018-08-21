import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandarddetailsComponent } from './standarddetails.component';

describe('StandarddetailsComponent', () => {
  let component: StandarddetailsComponent;
  let fixture: ComponentFixture<StandarddetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandarddetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandarddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
