import { TestBed } from '@angular/core/testing';

import { FinanciamientoService } from './financiamiento.service';

describe('FinanciamientoService', () => {
  let service: FinanciamientoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinanciamientoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
