import { TestBed } from '@angular/core/testing';

import { BaseApiWrapperService } from './base-api-wrapper.service';

describe('BaseApiWrapperService', () => {
  let service: BaseApiWrapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseApiWrapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
