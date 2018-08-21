import { TestBed, inject } from '@angular/core/testing';

import { RpmConstructivesService } from './rpm-constructives.service';

describe('RpmConstructivesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RpmConstructivesService]
    });
  });

  it('should be created', inject([RpmConstructivesService], (service: RpmConstructivesService) => {
    expect(service).toBeTruthy();
  }));
});
