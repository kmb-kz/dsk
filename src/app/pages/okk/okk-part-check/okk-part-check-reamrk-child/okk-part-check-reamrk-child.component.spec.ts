import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OkkPartCheckReamrkChildComponent } from './okk-part-check-reamrk-child.component';

describe('OkkPartCheckReamrkChildComponent', () => {
  let component: OkkPartCheckReamrkChildComponent;
  let fixture: ComponentFixture<OkkPartCheckReamrkChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OkkPartCheckReamrkChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OkkPartCheckReamrkChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
