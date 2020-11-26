import { TestBed } from '@angular/core/testing';

import { TipoFinanciamientoService } from './tipo-financiamiento.service';

describe('TipoFinanciamientoService', () => {
  let service: TipoFinanciamientoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoFinanciamientoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
