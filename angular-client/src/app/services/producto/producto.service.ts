import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Producto, TipoFinanciamiento } from '../../models/producto.model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { TipoFinanciamientoService } from '../tipo-financiamiento/tipo-financiamiento.service';
import { FinanciamientoService } from '../financiamiento/financiamiento.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  producto: Producto;
  productos: Producto[];
  productoChanged: BehaviorSubject<Producto>;
  constructor(private api: ApiService,
              private financiamientoService: FinanciamientoService) {
    this.producto = {
      idProducto: '1',
      producto: 'Auto',
      tipoFin: [{
        idTipoFin: '',
        tipoFin: 'GlobalAuto',
        tasa: 0,
        anticipo: 0,
        apertura: 0,
        deposito: 0,
        vRescate: 0,
        tfRescate: false,
        descuento: 0,
        admon: 0,
        tfAdmon: false,
        gps: 0,
        tfGps: false,
        seguroAuto: 0,
        tfSeguroAuto: false,
        seguroDeuda: 0,
        tfSeguroDeuda: false,
        liquidacion: 0,
        ppTipo: '',
      }]
    };
    this.productos = [this.producto];
    this.productoChanged = new BehaviorSubject<Producto>(this.producto);
  }

  changeProducto(producto: Producto): void {
    this.producto = producto;
    this.notifyChange();
  }

  getProductos(): Producto[] {
    return this.productos.slice();
  }

  fetchProductos(): Observable<Producto[]> {
    return this.api.get<Producto[]>('/productos');
  }

  productoByName(name: string): Observable<Producto> {
    return this.api.get<Producto>('/producto', { producto: name });
  }

  localProductoByName(name: string): Producto {
    const found = this.productos.find((producto) => producto.producto === name);
    if (found) {
      return found;
    } else {
      return null;
    }
  }

  modify(key: string, value: any): void {
    this.producto[key] = value;
    this.notifyChange();
  }

  clear(): void {
    this.producto = null;
    this.notifyChange();
  }

  private notifyChange(): void {
    const productoCopy = Object.assign({}, this.producto);
    this.productoChanged.next(productoCopy);
    this.financiamientoService.modify('producto', productoCopy);
  }
}
