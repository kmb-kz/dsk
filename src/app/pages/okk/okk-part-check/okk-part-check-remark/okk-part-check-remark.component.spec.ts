import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OkkPartCheckRemarkComponent } from './okk-part-check-remark.component';

describe('OkkPartCheckRemarkComponent', () => {
  let component: OkkPartCheckRemarkComponent;
  let fixture: ComponentFixture<OkkPartCheckRemarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OkkPartCheckRemarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OkkPartCheckRemarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
