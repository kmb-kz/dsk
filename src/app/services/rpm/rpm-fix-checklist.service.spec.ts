import { TestBed, inject } from '@angular/core/testing';

import { RpmFixChecklistService } from './rpm-fix-checklist.service';

describe('RpmFixChecklistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RpmFixChecklistService]
    });
  });

  it('should be created', inject([RpmFixChecklistService], (service: RpmFixChecklistService) => {
    expect(service).toBeTruthy();
  }));
});
