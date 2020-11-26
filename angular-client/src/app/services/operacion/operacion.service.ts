import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, Observable, of, Subject } from 'rxjs';
import { defaultOperacion, Operacion } from '../../models/operacion.model';
import { ApiService } from '../api/api.service';
import { AlertService } from '../../components/alert';
import { LoadingService } from '../loading/loading.service';
import { count, switchMap, tap } from 'rxjs/operators';
import { Financiamiento } from '../../models/financiamiento.model';
import { DateFormatterService } from '../date-formatter.service';

@Injectable({
  providedIn: 'root'
})
export class OperacionService {
  editMode = new Subject<boolean>();
  private operacion: Operacion = Object.assign({}, defaultOperacion);
  private operaciones: Operacion[] = [];
  operacionChanged = new BehaviorSubject<Operacion>(Object.assign({}, this.operacion));
  operacionesChanged = new Subject<Operacion[]>();

  constructor(private api: ApiService,
              private alert: AlertService,
              private loading: LoadingService,
              private dateFormatter: DateFormatterService) {}

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

  fetchOperaciones(): void {
    this.api.get<Operacion[]>('/operacion')
      .pipe(
        tap((operaciones) => {
          this.operaciones = operaciones;
          this.verifyDate();
          console.log('this.operaciones', this.operaciones);
          this.operacionesChanged.next(this.operaciones);
        }),
        switchMap((operaciones1: Operacion[]) => {
          const arr = operaciones1.map((operacion) => {
            if (operacion.idFinanciamiento) {
              return this.api.get<Financiamiento>(`/financiamiento/${operacion.idFinanciamiento}`);
            } else {
              return of([]);
            }
          });
          return forkJoin(arr);
        }),
      )
      .subscribe((value) => {
        this.operaciones.forEach((operacion, index) => {
          operacion.financiamiento = value[index] as Financiamiento;
        });
        console.log(this.operaciones);
      });
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
    this.operacionesChanged.next(this.operaciones.slice());
  }

  clear(): void {
    this.operacion = Object.assign({}, defaultOperacion);
    this.notifyChange();
  }

  private verifyDate() {
    this.operaciones.forEach((operacion) => {
      if (operacion.fecha) {
        const inFormat = this.dateFormatter.isInFormat(operacion.fecha);
        if (!inFormat) {
          operacion.fecha = this.dateFormatter.formattedDate(operacion.fecha);
        }
      }
    });
  }
}
