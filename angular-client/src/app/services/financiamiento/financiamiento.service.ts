import { Injectable } from '@angular/core';
import { defaultFinanciamiento, Financiamiento } from '../../models/financiamiento.model';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { OperacionService } from '../operacion/operacion.service';
import { ApiService } from '../api/api.service';
import { ATPResponse } from '../../models/atp-response.model';
import { User } from '../../models/user.model';
import { Operacion } from '../../models/operacion.model';

@Injectable({
  providedIn: 'root'
})
export class FinanciamientoService {
  financiamiento: Financiamiento;
  financiamientoChanged: BehaviorSubject<Financiamiento>;
  constructor(private operacionService: OperacionService,
              private api: ApiService) {
    this.financiamiento = defaultFinanciamiento;
    this.financiamientoChanged = new BehaviorSubject<Financiamiento>(this.financiamiento);
  }

  getFinanciamiento(id: number): Observable<Financiamiento> {
    return this.api.get<Financiamiento>(`/financiamiento/${id}`);
  }

  public get currentFinValue() {
    return this.financiamientoChanged.value;
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
  }

  hasSelectedProducto(): boolean {
    return !!this.financiamiento;
  }

  changeFinanciamiento(financiamiento: Financiamiento) {
    this.financiamiento = financiamiento;
    this.financiamientoChanged.next(this.financiamiento);
  }

  saveChanges(id?: string | number): Promise<ATPResponse> {
    if (id) {
      return this.api.put<ATPResponse>(`/financiamiento/${id}`, this.financiamiento)
        .toPromise();
    }
    return this.api.post<ATPResponse>(`/financiamiento`, this.financiamiento)
      .toPromise();
  }

  canCalculateFin() {
    const operacion = this.operacionService.currentOperacionValue;
    if (!this.financiamiento) {
      return false;
    } else {
      return this.financiamiento.valorOperacion > 0 &&
        this.financiamiento.periodicidad.length > 0 &&
        this.financiamiento.noPagos > 0 &&
        !!this.financiamiento.idProductoTipoFinanciamiento &&
        !!operacion.fecha;
    }
  }
}
