import { TestBed, inject } from '@angular/core/testing';

import { OkkAnswerService } from './okk-answer.service';

describe('OkkAnswerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OkkAnswerService]
    });
  });

  it('should be created', inject([OkkAnswerService], (service: OkkAnswerService) => {
    expect(service).toBeTruthy();
  }));
});
