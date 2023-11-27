import { TestBed } from '@angular/core/testing';

import { TaxPayingService } from './tax-paying.service';

describe('TaxPayingService', () => {
  let service: TaxPayingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxPayingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
