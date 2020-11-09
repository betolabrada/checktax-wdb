import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Producto } from '../../models/producto.model';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private api: ApiService) { }

  fetchProductos(): Observable<JSON> {
    return this.api.get('/productos');
  }
}
