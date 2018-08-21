import { TestBed, inject } from '@angular/core/testing';

import { OkkAreaService } from './okk-area.service';

describe('OkkAreaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OkkAreaService]
    });
  });

  it('should be created', inject([OkkAreaService], (service: OkkAreaService) => {
    expect(service).toBeTruthy();
  }));
});
