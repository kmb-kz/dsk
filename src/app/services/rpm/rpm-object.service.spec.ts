import { TestBed, inject } from '@angular/core/testing';

import { RpmObjectService } from './rpm-object.service';

describe('RpmObjectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RpmObjectService]
    });
  });

  it('should be created', inject([RpmObjectService], (service: RpmObjectService) => {
    expect(service).toBeTruthy();
  }));
});
