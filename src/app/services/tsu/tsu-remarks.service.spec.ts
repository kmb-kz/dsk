import { TestBed, inject } from '@angular/core/testing';

import { TsuRemarksService } from './tsu-remarks.service';

describe('TsuRemarksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TsuRemarksService]
    });
  });

  it('should be created', inject([TsuRemarksService], (service: TsuRemarksService) => {
    expect(service).toBeTruthy();
  }));
});
