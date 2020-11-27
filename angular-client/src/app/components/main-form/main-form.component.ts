import { Component, OnDestroy, OnInit } from '@angular/core';
import { Operacion } from '../../models/operacion.model';
import { OperacionService } from '../../services/operacion/operacion.service';
import { AlertService } from '../alert';
import { Producto, TipoFinanciamiento } from '../../models/producto.model';
import { LoadingService } from '../../services/loading/loading.service';
import { of, Subscription } from 'rxjs';
import { FinanciamientoService } from '../../services/financiamiento/financiamiento.service';
import { defaultFinanciamiento, Financiamiento } from '../../models/financiamiento.model';
import { ATPResponse } from '../../models/atp-response.model';
import { switchMap, tap } from 'rxjs/operators';
import { ProductoTipofinService } from '../../services/producto-tipofin.service';
import { ProductoService } from '../../services/producto/producto.service';
import { TipoFinanciamientoService } from '../../services/tipo-financiamiento/tipo-financiamiento.service';
import { CalculationsService } from '../../services/calculations.service';
import { ClearService } from '../../services/clear.service';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit, OnDestroy {

  private operacionChangedSub: Subscription;
  index: number;
  numOperacion: string;
  editMode = false;
  extensionActive = false;
  finding: boolean;
  loading: Subscription;
  operacion: Operacion;
  financiamiento: Financiamiento;
  productos: Producto[];
  producto: Producto;
  tipoFin: TipoFinanciamiento;
  private financiamientoSubscription: Subscription;

  constructor(private operacionService: OperacionService,
              private financiamientoService: FinanciamientoService,
              private productoService: ProductoService,
              private tipoFinService: TipoFinanciamientoService,
              private productoTipoFinService: ProductoTipofinService,
              private alertService: AlertService,
              private loadingService: LoadingService,
              private calculationsService: CalculationsService,
              private clearService: ClearService) {}

  ngOnInit(): void {
    this.loading = this.loadingService.loading$.subscribe((loading) => {
      this.finding = loading;
    });
    this.operacionChangedSub = this.operacionService.operacionChanged
      .pipe(
        tap((operacion) => {
          this.operacion = operacion;
          if (operacion.fecha) {
            this.calculationsService.fecha = new Date(operacion.fecha);
            this.calculationsService.verifyIfCanCalculate();
          }
        }),
        switchMap((operacion) => {
          this.loadingService.setLoading(true);
          if (operacion.idFinanciamiento) {
            return this.financiamientoService.getFinanciamiento(operacion.idFinanciamiento);
          }
          return of(null);
        }),
        tap((financiamiento) => {
          this.loadingService.setLoading(false);
          if (financiamiento) {
            this.financiamiento = financiamiento;
            this.financiamientoService.changeFinanciamiento(this.financiamiento);
          }
        }),
        switchMap((fin) => {
          if (fin && fin.idProductoTipoFinanciamiento) {
            console.log('ptf', fin.idProductoTipoFinanciamiento);
            return this.productoTipoFinService.getProductoTipoFin(fin.idProductoTipoFinanciamiento);
          } else {
            return of(null);
          }
        }),
      )
      .subscribe(
        (value) => {
          if (value) {
            this.productoService.changeProducto(value[0]);
            this.tipoFinService.changeTipoFin(value[1]);
            console.log(value);
          }
        }
      );
  }

  ngOnDestroy(): void {
    this.operacionChangedSub.unsubscribe();
  }


  handleNavEvent($event: string): void {
    if ($event === 'expand') {
      this.extensionActive = !this.extensionActive;
    } else if ($event === 'save') {
      this.saveChanges();
    }
  }

  update(key: string, $event: Event): void {
    this.operacionService.modify(key, ($event.target as HTMLInputElement).value);
  }

  public async saveChanges(): Promise<void> {
    let res: ATPResponse;
    if (this.operacion.idFinanciamiento) {
      res = await this.financiamientoService.saveChanges(this.operacion.idFinanciamiento);
    } else {
      res = await this.financiamientoService.saveChanges();
      console.log(res);
      this.operacionService.modify('idFinanciamiento', res.rid[0]);
    }
    this.operacionService.saveChanges();
  }


  showAlert(msg: string, type?: string): void {
    if (!type) {
      console.log('Showing Alert...');
      this.alertService.showAlert(msg);
      return;
    } else {
      switch (type) {
        case 'error': {
          this.alertService.showAlert(msg);
          break;
        }
      }
    }
  }
}
