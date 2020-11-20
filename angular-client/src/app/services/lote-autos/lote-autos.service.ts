import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OperacionService } from '../operacion/operacion.service';
import { LoteAuto } from '../../models/otros.model';

@Injectable({
  providedIn: 'root'
})
export class LoteAutosService {
  loteAutos: LoteAuto = {
    idLoteAuto: null,
    razonSocial: '',
    comisionSinIva: 0,
    comisionConIva: 0,
    importeSinIva: 0,
    importeConIva: 0,
    lineaVenta: '',
    sucursal: '',
    domicilio: '',
    asesor: ''
  };
  loteAutosChanged = new BehaviorSubject<LoteAuto>(this.loteAutos);
  constructor(private operacionService: OperacionService) { }

  modify(key: string, value: any): void {
    this.loteAutos[key] = value;
    this.notifyChange();
  }

  clear(): void {
    this.loteAutos = null;
    this.notifyChange();
  }

  notifyChange(): void {
    const lote = Object.assign({}, this.loteAutos);
    this.loteAutosChanged.next(lote);
    this.operacionService.modify('loteAutos', lote);
  }
}
