import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Operacion } from '../../models/operacion.model';
import { ApiService } from '../api/api.service';
import { AlertService } from '../../components/alert';
import { LoadingService } from '../loading/loading.service';

@Injectable({
  providedIn: 'root'
})
export class OperacionService {

  private operacion = new BehaviorSubject<Operacion>(new Operacion(''));
  operacion$: Observable<Operacion> = this.operacion.asObservable();

  constructor(private api: ApiService,
              private alert: AlertService,
              private loading: LoadingService) {}

  update(operacion: Operacion): void {
    this.operacion.next(operacion);
    this.saveOperacion();
  }

  getOperacion(): Operacion {
    return this.operacion.getValue();
  }

  queryNumOperacion(numOperacion: string): Observable<JSON> {
    return this.api.get('/operacion', { numOperacion });
  }

  public saveOperacion(): void {
    this.loading.setLoading(true);
    this.api.patch('/operacion', this.getOperacion()).subscribe(
      (value) => {
        console.log(value);
        this.loading.setLoading(false);
      },
      (error) => {
        this.alert.error('Ocurrió un error al guardar operación');
        console.log('Ocurrió un error al guardar operación: ', error);
        this.loading.setLoading(false);
      }
    );
  }
}
