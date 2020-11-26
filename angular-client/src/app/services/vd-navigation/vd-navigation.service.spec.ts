import { TestBed } from '@angular/core/testing';

import { VdNavigationService } from './vd-navigation.service';

describe('VdNavigationService', () => {
  let service: VdNavigationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VdNavigationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
