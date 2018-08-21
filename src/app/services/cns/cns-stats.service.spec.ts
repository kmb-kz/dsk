import { TestBed, inject } from '@angular/core/testing';

import { CnsStatsService } from './cns-stats.service';

describe('CnsStatsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CnsStatsService]
    });
  });

  it('should be created', inject([CnsStatsService], (service: CnsStatsService) => {
    expect(service).toBeTruthy();
  }));
});
