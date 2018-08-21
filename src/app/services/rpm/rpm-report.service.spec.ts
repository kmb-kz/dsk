import { TestBed, inject } from '@angular/core/testing';

import { RpmReportService } from './rpm-report.service';

describe('RpmReportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RpmReportService]
    });
  });

  it('should be created', inject([RpmReportService], (service: RpmReportService) => {
    expect(service).toBeTruthy();
  }));
});
