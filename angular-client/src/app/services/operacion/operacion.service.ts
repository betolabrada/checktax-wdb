import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { OperacionModel } from '../../models/operacion.model';

@Injectable({
  providedIn: 'root'
})
export class OperacionService {

  private operacion = new BehaviorSubject<OperacionModel>(new OperacionModel(''));
  operacion$: Observable<OperacionModel> = this.operacion.asObservable();

  constructor() {}

  update(operacion: OperacionModel): void {
    this.operacion.next(operacion);
  }
}
