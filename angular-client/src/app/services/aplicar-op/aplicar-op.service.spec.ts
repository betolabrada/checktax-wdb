import { TestBed } from '@angular/core/testing';

import { AplicarOpService } from './aplicar-op.service';

describe('AplicarOpService', () => {
  let service: AplicarOpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AplicarOpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
