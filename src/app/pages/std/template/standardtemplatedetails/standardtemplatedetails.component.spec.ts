import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardtemplatedetailsComponent } from './standardtemplatedetails.component';

describe('StandardtemplatedetailsComponent', () => {
  let component: StandardtemplatedetailsComponent;
  let fixture: ComponentFixture<StandardtemplatedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardtemplatedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardtemplatedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
