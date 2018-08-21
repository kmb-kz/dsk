import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpmReportActiveComponent } from './rpm-report-active.component';

describe('RpmReportActiveComponent', () => {
  let component: RpmReportActiveComponent;
  let fixture: ComponentFixture<RpmReportActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpmReportActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpmReportActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
