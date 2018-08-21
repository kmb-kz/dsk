import { TestBed, inject } from '@angular/core/testing';

import { CnsEditVolumeService } from './cns-edit-volume.service';

describe('CnsEditVolumeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CnsEditVolumeService]
    });
  });

  it('should be created', inject([CnsEditVolumeService], (service: CnsEditVolumeService) => {
    expect(service).toBeTruthy();
  }));
});
