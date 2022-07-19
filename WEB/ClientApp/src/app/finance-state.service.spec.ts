import { TestBed } from '@angular/core/testing';

import { FinanceStateService } from './finance-state.service';

describe('FinanceStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FinanceStateService = TestBed.get(FinanceStateService);
    expect(service).toBeTruthy();
  });
});
