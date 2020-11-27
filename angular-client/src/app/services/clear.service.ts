import { Injectable } from '@angular/core';
import { OperacionService } from './operacion/operacion.service';
import { FinanciamientoService } from './financiamiento/financiamiento.service';
import { ProductoTipofinService } from './producto-tipofin.service';
import { ProductoService } from './producto/producto.service';
import { TipoFinanciamientoService } from './tipo-financiamiento/tipo-financiamiento.service';

@Injectable({
  providedIn: 'root'
})
export class ClearService {

  constructor(private operacionService: OperacionService,
              private financiamientoService: FinanciamientoService,
              private productoTipoFinService: ProductoTipofinService,
              private productoService: ProductoService,
              private tipoFinService: TipoFinanciamientoService) { }

  clear() {
    this.operacionService.clear();
    this.financiamientoService.clear();
    this.productoTipoFinService.clear();
    this.productoService.clear();
    this.tipoFinService.clear();
  }
}
