import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpmReportGmComponent } from './rpm-report-gm.component';

describe('RpmReportGmComponent', () => {
  let component: RpmReportGmComponent;
  let fixture: ComponentFixture<RpmReportGmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpmReportGmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpmReportGmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
