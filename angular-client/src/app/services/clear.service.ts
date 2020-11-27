import { Injectable } from '@angular/core';
import { OperacionService } from './operacion/operacion.service';
import { FinanciamientoService } from './financiamiento/financiamiento.service';
import { ProductoTipofinService } from './producto-tipofin.service';

@Injectable({
  providedIn: 'root'
})
export class ClearService {

  constructor(private operacionService: OperacionService,
              private financiamientoService: FinanciamientoService,
              private productoTipoFinService: ProductoTipofinService) { }

  clear() {
    this.operacionService.clear();
    this.financiamientoService.clear();
    this.productoTipoFinService.clear();
  }
}
