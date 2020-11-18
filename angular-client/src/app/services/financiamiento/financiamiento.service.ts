import { Injectable } from '@angular/core';
import { Financiamiento } from '../../models/financiamiento.model';
import { BehaviorSubject } from 'rxjs';
import { OperacionService } from '../operacion/operacion.service';

@Injectable({
  providedIn: 'root'
})
export class FinanciamientoService {
  financiamiento: Financiamiento;
  financiamientoChanged: BehaviorSubject<Financiamiento>;
  constructor(private operacionService: OperacionService) {
    this.financiamiento = new Financiamiento();
    this.financiamientoChanged = new BehaviorSubject<Financiamiento>(this.financiamiento);
  }

  getFinanciamiento(): Financiamiento {
    return Object.assign({}, this.financiamiento);
  }

  modify(key: string, value: any): void {
    this.financiamiento[key] = value;
    this.notifyChange();
  }

  clear(): void {
    this.financiamiento = null;
    this.notifyChange();
  }

  notifyChange(): void {
    const fin = Object.assign({}, this.financiamiento);
    this.financiamientoChanged.next(fin);
    this.operacionService.modify('financiamiento', fin);
  }

  hasProducto(): boolean {
    return !!this.financiamiento.producto;
  }
}
