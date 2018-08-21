import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpmReportSelectiveComponent } from './rpm-report-selective.component';

describe('RpmReportSelectiveComponent', () => {
  let component: RpmReportSelectiveComponent;
  let fixture: ComponentFixture<RpmReportSelectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpmReportSelectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpmReportSelectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
