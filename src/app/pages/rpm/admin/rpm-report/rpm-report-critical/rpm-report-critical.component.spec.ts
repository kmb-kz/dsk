import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpmReportCriticalComponent } from './rpm-report-critical.component';

describe('RpmReportCriticalComponent', () => {
  let component: RpmReportCriticalComponent;
  let fixture: ComponentFixture<RpmReportCriticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpmReportCriticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpmReportCriticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
