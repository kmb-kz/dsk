import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpmReportMonthComponent } from './rpm-report-month.component';

describe('RpmReportMonthComponent', () => {
  let component: RpmReportMonthComponent;
  let fixture: ComponentFixture<RpmReportMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpmReportMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpmReportMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
