import { Component, OnInit } from '@angular/core';
import { OperacionModel } from '../../models/operacion.model';
import { OperacionService } from '../../services/operacion/operacion.service';
import { AlertService } from '../alert';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit {

  extensionActive = false;
  operacion: OperacionModel;

  constructor(private operacionService: OperacionService,
              private alertService: AlertService) {}

  ngOnInit(): void {
    this.operacion = new OperacionModel('');
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


  showAlert(msg: string): void {
    console.log('Showing Alert...');
    this.alertService.success(msg);
  }
}
