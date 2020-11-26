import { TestBed } from '@angular/core/testing';

import { LoteAutosService } from './lote-autos.service';

describe('LoteAutosService', () => {
  let service: LoteAutosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoteAutosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
