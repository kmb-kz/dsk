import { TestBed, inject } from '@angular/core/testing';

import { TsuAreasService } from './tsu-areas.service';

describe('TsuAreasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TsuAreasService]
    });
  });

  it('should be created', inject([TsuAreasService], (service: TsuAreasService) => {
    expect(service).toBeTruthy();
  }));
});
