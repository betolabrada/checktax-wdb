import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Operacion } from '../../models/operacion.model';
import { ApiService } from '../api/api.service';
import { AlertService } from '../../components/alert';
import { LoadingService } from '../loading/loading.service';

@Injectable({
  providedIn: 'root'
})
export class OperacionService {
  editMode = new Subject<boolean>();
  private operacion: Operacion = new Operacion('');
  private operaciones: Operacion[] = [
    new Operacion('400'),
    new Operacion('500')
  ];
  operacionChanged = new BehaviorSubject<Operacion>(Object.assign({}, this.operacion));
  listChanged = new Subject<Operacion[]>();

  constructor(private api: ApiService,
              private alert: AlertService,
              private loading: LoadingService) {}

  saveChanges(): void {
    this.saveOperacion();
    this.operacionChanged.next(Object.assign({}, this.operacion));
  }

  changeOperacion(operacion: Operacion): void {
    this.operacion = operacion;
    this.editMode.next(true);
    this.operacionChanged.next(Object.assign({}, this.operacion));
  }

  getOperacion(index: number): Operacion {
    return this.operaciones[index];
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
        this.alert.showAlert('Ocurrió un error al guardar operación', 'error');
        console.log('Ocurrió un error al guardar operación: ', error);
        this.loading.setLoading(false);
      }
    );
  }

  operacionTieneFinanciamiento(): boolean {
    return !!this.operacion.financiamiento;
  }

  createOperacion(numOperacion: string): void {
    const operacion = new Operacion(numOperacion);
    this.operaciones.push(operacion);
    this.operacion = operacion;
    this.notifyChange();
  }

  notifyChange(): void {
    this.operacionChanged.next(Object.assign({}, this.operacion));
    this.listChanged.next(this.operaciones.slice());
  }

  clear(): void {
    this.operacion = new Operacion('');
    this.notifyChange();
  }
}
