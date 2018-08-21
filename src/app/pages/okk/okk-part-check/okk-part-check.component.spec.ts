import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OkkPartCheckComponent } from './okk-part-check.component';

describe('OkkPartCheckComponent', () => {
  let component: OkkPartCheckComponent;
  let fixture: ComponentFixture<OkkPartCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OkkPartCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OkkPartCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
