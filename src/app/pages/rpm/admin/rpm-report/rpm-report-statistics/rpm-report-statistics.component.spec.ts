import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpmReportStatisticsComponent } from './rpm-report-statistics.component';

describe('RpmReportStatisticsComponent', () => {
  let component: RpmReportStatisticsComponent;
  let fixture: ComponentFixture<RpmReportStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpmReportStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpmReportStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
