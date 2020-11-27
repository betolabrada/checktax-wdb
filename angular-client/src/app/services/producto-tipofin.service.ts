import { Injectable } from '@angular/core';
import { ApiService } from './api/api.service';
import { ProductoTipoFinanciamiento } from '../models/producto-tipofinanciamiento.model';
import { Producto, TipoFinanciamiento } from '../models/producto.model';
import { combineLatest, Observable, Subject } from 'rxjs';
import { concat, map, mergeMap, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductoTipofinService {

  producto: Producto;
  productoChanged = new Subject<Producto>();
  tipoFin: TipoFinanciamiento;
  tipoFinChanged = new Subject<TipoFinanciamiento>();
  productosTipoFin: ProductoTipoFinanciamiento[];
  constructor(private api: ApiService) {
    this.api.get<ProductoTipoFinanciamiento[]>(`/productoTipoFin`)
      .subscribe((ptfs) => {
        this.productosTipoFin = ptfs;
      });
  }

  getProductoTipoFin(id): Observable<any> {
    return this.api.get<ProductoTipoFinanciamiento>(`/productoTipoFin/${id}`)
      .pipe(
        switchMap((ptf) => {
          return combineLatest([
            this.getProducto(ptf.idProducto),
            this.getTipoFin(ptf.idTipoFin)
          ]);
        })
      );
  }

  getProducto(id): Observable<Producto> {
    return this.api.get<Producto>(`/productos/${id}`);
  }

  getTipoFin(id): Observable<TipoFinanciamiento> {
    return this.api.get<TipoFinanciamiento>(`/tipoFin/${id}`);
  }

  findPTF(idTf, idP) {
    return this.productosTipoFin.find((ptf) => idP === ptf.idProducto &&
      idTf === ptf.idTipoFin);
  }

  clear() {
    this.productoChanged.next(null);
    this.tipoFinChanged.next(null);
  }
}
