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
    this.productos = [
      new Producto(1, 'Auto', [
        new TipoFinanciamiento(1, 'GlobalAuto'),
        new TipoFinanciamiento(2, 'ArrFinanciero'),
        new TipoFinanciamiento(3, 'Mensualidad'),
      ]),
      new Producto(2, 'Nomina', []),
      new Producto(3, 'ArrPuro', []),
      new Producto(4, 'Motos', [])
    ];
    this.producto = null;
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
    this.financiamientoService.modify('producto', {
      idProducto: productoCopy.idProducto,
      producto: productoCopy.producto,
      selectedTipoFin: productoCopy.selectedTipoFin,
    });
  }
}
