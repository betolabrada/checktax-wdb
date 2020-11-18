import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Operacion } from '../../models/operacion.model';
import { ApiService } from '../api/api.service';
import { AlertService } from '../../components/alert';
import { LoadingService } from '../loading/loading.service';

@Injectable({
  providedIn: 'root'
})
export class OperacionService {
  private operacion: Operacion;
  private operaciones: Operacion[];
  operacionChanged: BehaviorSubject<Operacion>;

  constructor(private api: ApiService,
              private alert: AlertService,
              private loading: LoadingService) {
    this.operaciones = [
      new Operacion('400'),
      new Operacion('500')
    ];
    this.operacion = new Operacion('');
    this.operacionChanged = new BehaviorSubject<Operacion>(Object.assign({}, this.operacion));
  }

  saveChanges(): void {
    this.saveOperacion();
    this.operacionChanged.next(Object.assign({}, this.operacion));
  }

  changeOperacion(operacion: Operacion): void {
    this.operacion = operacion;
    this.operacionChanged.next(Object.assign({}, this.operacion));
  }

  getOperaciones(): Operacion[] {
    return this.operaciones.slice();
  }

  queryNumOperacion(numOperacion: string): Observable<JSON> {
    return this.api.get('/operacion', { numOperacion });
  }

  public modify(k: string, v: any): void {
    this.operacion.update(k, v);
    this.operacionChanged.next(Object.assign({}, this.operacion));
  }

  public saveOperacion(): void {
    this.loading.setLoading(true);
    this.api.patch('/operacion', this.operacion).subscribe(
      (value) => {
        console.log(value);
        this.loading.setLoading(false);
      },
      (error) => {
        this.alert.showAlert('Ocurrió un error al guardar operación');
        console.log('Ocurrió un error al guardar operación: ', error);
        this.loading.setLoading(false);
      }
    );
  }

  hasFinanciamiento(): boolean {
    return !!this.operacion.financiamiento;
  }
}
