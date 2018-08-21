import { TestBed, inject } from '@angular/core/testing';

import { NsiService } from './nsi.service';

describe('NsiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NsiService]
    });
  });

  it('should be created', inject([NsiService], (service: NsiService) => {
    expect(service).toBeTruthy();
  }));
});
