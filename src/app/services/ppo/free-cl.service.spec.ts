import { TestBed, inject } from '@angular/core/testing';

import { FreeClService } from './free-cl.service';

describe('FreeClService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FreeClService]
    });
  });

  it('should be created', inject([FreeClService], (service: FreeClService) => {
    expect(service).toBeTruthy();
  }));
});
