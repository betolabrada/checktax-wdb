import { Injectable } from '@angular/core';
import { Producto, TipoFinanciamiento } from '../../models/producto.model';
import { Observable, Subject } from 'rxjs';
import { ProductoService } from '../producto/producto.service';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class TipoFinanciamientoService {
  producto: Producto;
  tipoFin: TipoFinanciamiento;
  tipoFinChanged: Subject<TipoFinanciamiento>;
  private tipoFinanciamientos: TipoFinanciamiento[] = [];
  constructor(private productoService: ProductoService,
              private api: ApiService) {
    this.tipoFinChanged = new Subject<TipoFinanciamiento>();
    this.productoService.productoChanged
      .subscribe((producto) => {
        this.tipoFinanciamientos = producto.tiposFin;
      });
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

  fetchTipoFinanciamiento(id: string): Observable<TipoFinanciamiento> {
    return this.api.get<TipoFinanciamiento>(`/tipoFin/${id}`);
  }
}
