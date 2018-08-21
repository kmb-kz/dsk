import { TestBed, inject } from '@angular/core/testing';

import { CnsConstructiveService } from './cns-constructive.service';

describe('CnsConstructiveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CnsConstructiveService]
    });
  });

  it('should be created', inject([CnsConstructiveService], (service: CnsConstructiveService) => {
    expect(service).toBeTruthy();
  }));
});
