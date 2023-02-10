import { TestBed } from '@angular/core/testing';

import { AndServiceService } from './and.service';

describe('AndServiceService', () => {
  let service: AndServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AndServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
