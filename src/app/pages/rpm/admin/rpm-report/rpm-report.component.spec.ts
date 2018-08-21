import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpmReportComponent } from './rpm-report.component';

describe('RpmReportComponent', () => {
  let component: RpmReportComponent;
  let fixture: ComponentFixture<RpmReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpmReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpmReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
