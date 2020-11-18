import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { OperacionService } from '../operacion/operacion.service';

class LoteAutos {
  razonSocial: string;
  comisionSinIva: number;
  comisionConIva: number;
  importeSinIva: number;
  importeConIva: number;
  lineaVenta: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoteAutosService {
  loteAutos = new LoteAutos();
  loteAutosChanged = new Subject<LoteAutos>();
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
    const fin = Object.assign({}, this.loteAutos);
    this.loteAutosChanged.next(fin);
    this.operacionService.modify('loteAutos', LoteAutos);
  }
}
