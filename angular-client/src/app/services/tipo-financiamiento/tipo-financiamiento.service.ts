import { Injectable } from '@angular/core';
import { Producto, TipoFinanciamiento } from '../../models/producto.model';
import { Observable, Subject } from 'rxjs';
import { ProductoService } from '../producto/producto.service';
import { ApiService } from '../api/api.service';
import { ProductoTipoFinanciamiento } from '../../models/producto-tipofinanciamiento.model';
import { ProductoTipofinService } from '../producto-tipofin.service';
import { FinanciamientoService } from '../financiamiento/financiamiento.service';

@Injectable({
  providedIn: 'root'
})
export class TipoFinanciamientoService {
  producto: Producto;
  tipoFin: TipoFinanciamiento;
  tipoFinChanged: Subject<TipoFinanciamiento>;
  productoTipoFin: ProductoTipoFinanciamiento[] = [];
  private tipoFinanciamientos: TipoFinanciamiento[] = [];
  constructor(private productoService: ProductoService,
              private productoTipoFinService: ProductoTipofinService,
              private financiamientoService: FinanciamientoService,
              private api: ApiService) {
    this.tipoFinChanged = new Subject<TipoFinanciamiento>();
    this.productoTipoFinService.productoChanged
      .subscribe((producto) => {
        if (producto) {
          this.producto = producto;
          this.tipoFinanciamientos = producto.tiposFin;
        }
      });
    this.fetchTiposFin();
  }

  fetchTiposFin(): void {
    this.api.get<ProductoTipoFinanciamiento[]>( `/productoTipoFin` )
      .subscribe((tiposFin) => {
        this.productoTipoFin = tiposFin;
        console.log('producto tipos fin', this.productoTipoFin);
      });
  }

  buscaTipoFin(nombre: string): void {
    console.log('nombr', parseInt(nombre, 10));
    const num = parseInt(nombre, 10);
    console.log(this.tipoFinanciamientos);
    const found = this.tipoFinanciamientos.find((tipoFin: TipoFinanciamiento) => tipoFin.idTipoFin === num);

    console.log('found', found);
    if (found) {
      this.changeTipoFin(found);
      const idPTF = this.productoTipoFinService.findPTF(found.idTipoFin, this.producto.idProducto);
      if (idPTF) {
        console.log(idPTF.id);
        this.financiamientoService.modify('idProductoTipoFinanciamiento', idPTF.id);
      }
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
    this.productoTipoFinService.tipoFinChanged.next(tipoFinCopy);
  }

  fetchTipoFinanciamiento(id: string): Observable<TipoFinanciamiento> {
    return this.api.get<TipoFinanciamiento>(`/tipoFin/${id}`);
  }

  getIdTipoFinanciamiento(idProducto: number, idTipoFin: number): ProductoTipoFinanciamiento {
    return this.productoTipoFin.find((ptf) => {
      return ptf.idProducto === idProducto && ptf.idTipoFin === idTipoFin;
    });
  }
}
