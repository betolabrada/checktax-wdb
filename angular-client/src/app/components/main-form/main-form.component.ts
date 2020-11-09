import { Component, OnInit } from '@angular/core';
import { Operacion } from '../../models/operacion.model';
import { OperacionService } from '../../services/operacion/operacion.service';
import { AlertService } from '../alert';
import { Producto } from '../../models/producto.model';
import { LoadingService } from '../../services/loading/loading.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit {

  extensionActive = false;
  finding: boolean;
  loading: Subscription;
  operacion: Operacion;
  productos: Producto[];

  constructor(private operacionService: OperacionService,
              private alertService: AlertService,
              private loadingService: LoadingService) {}

  ngOnInit(): void {
    this.operacion = new Operacion('');
    this.loading = this.loadingService.loading$.subscribe((loading) => {
      this.finding = loading;
    });
  }


  handleNavEvent($event: string): void {
    if ($event === 'expand') {
      this.extensionActive = !this.extensionActive;
    } else if ($event === 'save') {
      this.saveChanges();
    }
  }

  update(key: string, $event: Event): void {
    this.operacion.update(key, ($event.target as HTMLInputElement).value);
  }

  public saveChanges(): void {
    this.operacionService.update(this.operacion);
  }

  get numOperacion(): string {
    return this.operacion.numOperacion;
  }

  get fecha(): string {
    return typeof this.operacion.fecha === 'string' ? this.operacion.fecha : '';
  }

  get folio(): string {
    return typeof this.operacion.folio === 'string' ? this.operacion.folio : '';
  }

  get refPagos(): string {
    return typeof this.operacion.refPagos === 'string' ? this.operacion.refPagos : '';
  }

  get cliente(): string {
    return typeof this.operacion.cliente === 'string' ? this.operacion.cliente : '';
  }

  get persona(): string {
    return typeof this.operacion.persona === 'string' ? this.operacion.persona : '';
  }

  get descripcion(): string {
    return typeof this.operacion.descripcion === 'string' ? this.operacion.descripcion : '';
  }

  get asesor(): string {
    return typeof this.operacion.asesor === 'string' ? this.operacion.asesor : '';
  }

  get producto(): string {
    return this.operacion.producto != null ? this.operacion.producto.producto : '';
  }


  showAlert(msg: string, type?: string): void {
    if (!type) {
      console.log('Showing Alert...');
      this.alertService.success(msg);
      return;
    } else {
      switch (type) {
        case 'error': {
          this.alertService.error(msg);
          break;
        }
      }
    }
  }

  searchProduct(event: Event): void {

  }

  findOperacion(): void {
    console.log('finding...');
    this.loadingService.setLoading(true);
    this.operacionService.queryNumOperacion(this.numOperacion).subscribe(
      (value) => {
        console.log(value);
        this.showAlert('Found operación!');
        this.loadingService.setLoading(false);
      },
      (error) => {
        console.log(error);
        this.showAlert('No se encontró operación', 'error');
        this.loadingService.setLoading(false);
      }
    );
  }
}
