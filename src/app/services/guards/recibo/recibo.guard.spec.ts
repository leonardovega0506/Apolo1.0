import { TestBed } from '@angular/core/testing';

import { ReciboGuard } from './recibo.guard';

describe('ReciboGuard', () => {
  let guard: ReciboGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ReciboGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
