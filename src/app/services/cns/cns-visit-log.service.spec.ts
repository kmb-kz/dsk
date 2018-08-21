import { TestBed, inject } from '@angular/core/testing';

import { CnsVisitLogService } from './cns-visit-log.service';

describe('CnsVisitLogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CnsVisitLogService]
    });
  });

  it('should be created', inject([CnsVisitLogService], (service: CnsVisitLogService) => {
    expect(service).toBeTruthy();
  }));
});
