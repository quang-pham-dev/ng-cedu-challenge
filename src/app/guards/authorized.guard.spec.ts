import { TestBed, inject } from '@angular/core/testing';

import { AuthorizedGuard } from './authorized.guard';

describe('AuthorizedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthorizedGuard]
    });
  });

  it('should ...', inject([AuthorizedGuard], (guard: AuthorizedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
