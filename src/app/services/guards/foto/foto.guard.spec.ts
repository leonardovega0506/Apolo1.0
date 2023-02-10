import { TestBed } from '@angular/core/testing';

import { FotoGuard } from './foto.guard';

describe('FotoGuard', () => {
  let guard: FotoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FotoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
