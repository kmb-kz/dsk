import { TestBed, inject } from '@angular/core/testing';

import { RpmAreaPartsService } from './rpm-area-parts.service';

describe('RpmAreaPartsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RpmAreaPartsService]
    });
  });

  it('should be created', inject([RpmAreaPartsService], (service: RpmAreaPartsService) => {
    expect(service).toBeTruthy();
  }));
});
