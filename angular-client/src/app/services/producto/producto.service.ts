import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { defaultProducto, Producto, TipoFinanciamiento } from '../../models/producto.model';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';
import { TipoFinanciamientoService } from '../tipo-financiamiento/tipo-financiamiento.service';
import { FinanciamientoService } from '../financiamiento/financiamiento.service';
import { ProductoTipofinService } from '../producto-tipofin.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  producto: Producto = defaultProducto;
  productos: Producto[] = [];
  productoChanged = new BehaviorSubject<Producto>(this.producto);
  productosChanged = new Subject<Producto[]>();
  constructor(private api: ApiService,
              private productoTipoFinService: ProductoTipofinService) {}

  changeProducto(producto: Producto): void {
    this.producto = producto;
    this.notifyChange();
  }

  changeProductos(productos: Producto[]): void {
    this.productos = productos;
    this.productosChanged.next(this.productos);
  }

  getProductos(): Producto[] {
    return this.productos.slice();
  }

  fetchProductos(): Observable<Producto[]> {
    return this.api.get<Producto[]>('/productos');
  }

  findProductos(name: string): Observable<readonly any[]> {
    return of<readonly any[]>(this.productos.filter((value) => {
      return value.producto === name;
    }));
  }

  productoByName(name: string): Observable<Producto> {
    return this.api.get<Producto>(`/productoByName/${name}`);
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
    this.producto = defaultProducto;
    this.notifyChange();
  }

  private notifyChange(): void {
    const productoCopy = Object.assign({}, this.producto);
    this.productoTipoFinService.productoChanged.next(productoCopy);
  }
}
