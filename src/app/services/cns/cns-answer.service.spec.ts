import { TestBed, inject } from '@angular/core/testing';

import { CnsAnswerService } from './cns-answer.service';

describe('CnsAnswerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CnsAnswerService]
    });
  });

  it('should be created', inject([CnsAnswerService], (service: CnsAnswerService) => {
    expect(service).toBeTruthy();
  }));
});
