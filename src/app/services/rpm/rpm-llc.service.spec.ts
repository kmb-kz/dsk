import { TestBed, inject } from '@angular/core/testing';

import { RpmLlcService } from './rpm-llc.service';

describe('RpmLlcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RpmLlcService]
    });
  });

  it('should be created', inject([RpmLlcService], (service: RpmLlcService) => {
    expect(service).toBeTruthy();
  }));
});
