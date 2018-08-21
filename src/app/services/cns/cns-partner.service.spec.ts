import { TestBed, inject } from '@angular/core/testing';

import { CnsPartnerService } from './cns-partner.service';

describe('CnsPartnerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CnsPartnerService]
    });
  });

  it('should be created', inject([CnsPartnerService], (service: CnsPartnerService) => {
    expect(service).toBeTruthy();
  }));
});
