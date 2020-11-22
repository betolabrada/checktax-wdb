import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { OperacionService } from '../operacion/operacion.service';
import { LoteAuto } from '../../models/otros.model';

@Injectable({
  providedIn: 'root'
})
export class LoteAutosService {
  loteAutos: LoteAuto[] = [
    {
      idLoteAuto: 1,
      razonSocial: '3B Motors',
      comisionSinIva: 0,
      comisionConIva: 0,
      importeSinIva: 0,
      importeConIva: 0,
      lineaVenta: '',
      sucursal: '',
      domicilio: '',
      asesor: ''
    }
  ];
  loteAuto: LoteAuto = {
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
  loteAutoChanged = new Subject<LoteAuto>();
  constructor(private operacionService: OperacionService) { }

  modify(key: string, value: any): void {
    this.loteAuto[key] = value;
    this.notifyChange();
  }

  clear(): void {
    this.loteAuto = null;
    this.notifyChange();
  }

  notifyChange(): void {
    const lote = Object.assign({}, this.loteAuto);
    this.loteAutoChanged.next(lote);
    this.operacionService.modify('loteAutos', lote);
  }

  getList(): LoteAuto[] {
    return this.loteAutos.slice();
  }

  localLoteAutoByName(name: string): LoteAuto {
    const found = this.loteAutos.find((producto) => producto.razonSocial === name);
    if (found) {
      return found;
    } else {
      return null;
    }
  }

  changeLote(loteAuto: LoteAuto) {
    this.loteAuto = loteAuto;
    this.notifyChange();
  }
}
