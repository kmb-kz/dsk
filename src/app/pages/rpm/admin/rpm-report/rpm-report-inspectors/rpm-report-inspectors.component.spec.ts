import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpmReportInspectorsComponent } from './rpm-report-inspectors.component';

describe('RpmReportInspectorsComponent', () => {
  let component: RpmReportInspectorsComponent;
  let fixture: ComponentFixture<RpmReportInspectorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpmReportInspectorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpmReportInspectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
