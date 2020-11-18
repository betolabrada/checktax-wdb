import { Component, OnDestroy, OnInit } from '@angular/core';
import { Operacion } from '../../models/operacion.model';
import { OperacionService } from '../../services/operacion/operacion.service';
import { AlertService } from '../alert';
import { Producto } from '../../models/producto.model';
import { LoadingService } from '../../services/loading/loading.service';
import { Subscription } from 'rxjs';
import { FinanciamientoService } from '../../services/financiamiento/financiamiento.service';
import { Financiamiento } from '../../models/financiamiento.model';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit, OnDestroy {

  private operacionSub: Subscription;
  private financiamientoSub: Subscription;
  private productoSub: Subscription;
  numOperacion: string;
  extensionActive = false;
  finding: boolean;
  loading: Subscription;
  operacion: Operacion;
  productos: Producto[];

  constructor(private operacionService: OperacionService,
              private financiamientoService: FinanciamientoService,
              private alertService: AlertService,
              private loadingService: LoadingService) {}

  ngOnInit(): void {
    this.loading = this.loadingService.loading$.subscribe((loading) => {
      this.finding = loading;
    });
    this.operacionSub = this.operacionService.operacionChanged
      .subscribe(
        (operacion: Operacion) => {
          this.operacion = operacion;
          console.log(this.operacion);
        }
      );
  }

  ngOnDestroy(): void {
    this.operacionSub.unsubscribe();
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

  public saveChanges(): void {
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
