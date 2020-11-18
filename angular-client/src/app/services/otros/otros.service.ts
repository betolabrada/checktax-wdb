import { Injectable } from '@angular/core';
import { Impuesto, SeguroAuto } from '../../models/otros.model';
import { Subject } from 'rxjs';
import { OperacionService } from '../operacion/operacion.service';

interface OtrosParam {
  seguroAuto: SeguroAuto;
  impuesto: Impuesto;
}

@Injectable({
  providedIn: 'root'
})
export class OtrosService {

  impuesto: Impuesto;
  seguroAuto: SeguroAuto;
  otrosChanged: Subject<OtrosParam>;
  constructor(private operacionService: OperacionService) {
    this.impuesto = new Impuesto();
    this.seguroAuto = new SeguroAuto();
    this.otrosChanged = new Subject<OtrosParam>();
  }

  modify(model: string, key: string, value: any): void {
    if (model === 'impuesto') {
      this.updateImpuesto(key, value);
    } else if (model === 'seguroAuto') {
      this.updateSeguroAuto(key, value);
    }
    this.notifyChange();
  }

  private updateImpuesto(key: string, value: any): void {
    this.impuesto[key] = value;
  }

  private updateSeguroAuto(key: string, value: any): void {
    this.seguroAuto[key] = value;
  }

  notifyChange(): void {
    const changed: OtrosParam = {
      seguroAuto: { ...this.seguroAuto },
      impuesto: { ...this.impuesto },
    };
    this.otrosChanged.next(changed);
    this.operacionService.modify('otros', changed);
  }
}
