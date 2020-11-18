import { Injectable } from '@angular/core';
import { TipoFinanciamiento } from '../../models/producto.model';
import { Subject } from 'rxjs';
import { ProductoService } from '../producto/producto.service';

@Injectable({
  providedIn: 'root'
})
export class TipoFinanciamientoService {
  tipoFin: TipoFinanciamiento;
  tipoFinChanged: Subject<TipoFinanciamiento>;
  private tipoFinanciamientos: TipoFinanciamiento[] = [
    new TipoFinanciamiento(1, 'GlobalAuto'),
    new TipoFinanciamiento(2, 'ArrFinanciero'),
    new TipoFinanciamiento(3, 'Mensualidad'),
  ];
  constructor(private productoService: ProductoService) {
    this.tipoFinChanged = new Subject<TipoFinanciamiento>();
  }

  buscaTipoFin(nombre: string): void {
    const found = this.tipoFinanciamientos.find((tipoFin: TipoFinanciamiento) =>
      tipoFin.tipoFin === nombre
    );

    if (found) {
      this.changeTipoFin(found);
    }
  }

  changeTipoFin(tipoFin: TipoFinanciamiento): void {
    this.tipoFin = tipoFin;
    this.notifyChange();
  }

  clear(): void {
    this.tipoFin = null;
    this.notifyChange();
  }

  notifyChange(): void {
    const tipoFinCopy: TipoFinanciamiento = Object.assign({}, this.tipoFin);
    this.tipoFinChanged.next(tipoFinCopy);
    this.productoService.modify('selectedTipoFin', tipoFinCopy);
  }
}
