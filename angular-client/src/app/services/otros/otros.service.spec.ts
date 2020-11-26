import { TestBed } from '@angular/core/testing';

import { OtrosService } from './otros.service';

describe('OtrosService', () => {
  let service: OtrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OtrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
