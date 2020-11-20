import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { OperacionService } from '../operacion/operacion.service';
import { AplicarOp } from '../../models/aplicar-operacion.model';

@Injectable({
  providedIn: 'root'
})
export class AplicarOpService {
  aplicarOp: AplicarOp;
  aplicarOpChanged: Subject<AplicarOp>;
  constructor(private operationService: OperacionService) {
    this.aplicarOp = new AplicarOp();
    this.aplicarOpChanged = new Subject<AplicarOp>();
    this.notifyChange();
  }

  modify(key: string, value: any): void {
    this.aplicarOp[key] = value;
    this.notifyChange();
  }

  notifyChange(): void {
    const copy = Object.assign({}, this.aplicarOp);
    this.aplicarOpChanged.next(copy);
    this.operationService.modify('aplicarOp', copy);
  }
}
