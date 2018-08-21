import { TestBed, inject } from '@angular/core/testing';

import { OkkStandardService } from './okk-standard.service';

describe('OkkStandardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OkkStandardService]
    });
  });

  it('should be created', inject([OkkStandardService], (service: OkkStandardService) => {
    expect(service).toBeTruthy();
  }));
});
