import { TestBed, inject } from '@angular/core/testing';

import { FixClService } from './fix-cl.service';

describe('FixClService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FixClService]
    });
  });

  it('should be created', inject([FixClService], (service: FixClService) => {
    expect(service).toBeTruthy();
  }));
});
