import { TestBed, inject } from '@angular/core/testing';

import { RpmRemarkService } from './rpm-remark.service';

describe('RpmRemarkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RpmRemarkService]
    });
  });

  it('should be created', inject([RpmRemarkService], (service: RpmRemarkService) => {
    expect(service).toBeTruthy();
  }));
});
