import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpmReportGlobalComponent } from './rpm-report-global.component';

describe('RpmReportGlobalComponent', () => {
  let component: RpmReportGlobalComponent;
  let fixture: ComponentFixture<RpmReportGlobalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpmReportGlobalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpmReportGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
