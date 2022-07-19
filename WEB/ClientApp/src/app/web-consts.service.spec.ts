import { TestBed } from '@angular/core/testing';

import { WebConstsService } from './web-consts.service';

describe('WebConstsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebConstsService = TestBed.get(WebConstsService);
    expect(service).toBeTruthy();
  });
});
