import { TestBed, inject } from '@angular/core/testing';

import { RpmSendUsersService } from './rpm-send-users.service';

describe('RpmSendUsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RpmSendUsersService]
    });
  });

  it('should be created', inject([RpmSendUsersService], (service: RpmSendUsersService) => {
    expect(service).toBeTruthy();
  }));
});
