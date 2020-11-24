import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { defaultOperacion, Operacion } from '../../models/operacion.model';
import { ApiService } from '../api/api.service';
import { AlertService } from '../../components/alert';
import { LoadingService } from '../loading/loading.service';

@Injectable({
  providedIn: 'root'
})
export class OperacionService {
  editMode = new Subject<boolean>();
  private operacion: Operacion = Object.assign({}, defaultOperacion);
  private operaciones: Operacion[] = [];
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

  fetchOperaciones(): Observable<Operacion[]> {
    return this.api.get<Operacion[]>('/operacion');
  }

  queryNumOperacion(numOperacion: string): Observable<Operacion> {
    return this.api.get<Operacion>(`/operacion/${numOperacion}`);
  }

  public modify(k: string, v: any): void {
    this.operacion[k] = v;
    this.operacionChanged.next(Object.assign({}, this.operacion));
  }

  public saveOperacion(): void {
    this.loading.setLoading(true);
    console.log('saving', JSON.stringify(this.operacion));
    if (this.operacion.numOperacion.length === 0) {
      this.alert.showAlert('No puedes guardar una operación sin número de operación', 'error');
      this.loading.setLoading(false);
      return;
    }
    this.api.put(`/operacion/${this.operacion.numOperacion}`, this.operacion).subscribe(
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
    return !!this.operacion.idFinanciamiento;
  }

  createOperacion(numOperacion: string): void {
    const operacion: Operacion = Object.assign({ }, defaultOperacion);
    operacion.numOperacion = numOperacion;
    this.operaciones.push(operacion);
    this.operacion = operacion;
    this.notifyChange();
    this.api.post('/operacion', operacion)
      .subscribe((res) => {
        console.log(res);
      },
        (err) => {
          console.log(err);
        });
  }

  notifyChange(): void {
    this.operacionChanged.next(Object.assign({}, this.operacion));
    this.listChanged.next(this.operaciones.slice());
  }

  clear(): void {
    this.operacion = Object.assign({}, defaultOperacion);
    this.notifyChange();
  }
}
