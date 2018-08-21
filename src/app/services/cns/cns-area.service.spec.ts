import { TestBed, inject } from '@angular/core/testing';

import { CnsAreaService } from './cns-area.service';

describe('CnsAreaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CnsAreaService]
    });
  });

  it('should be created', inject([CnsAreaService], (service: CnsAreaService) => {
    expect(service).toBeTruthy();
  }));
});
