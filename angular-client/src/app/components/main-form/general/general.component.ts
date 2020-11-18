import { Component, Input, OnInit } from '@angular/core';
import { Operacion } from '../../../models/operacion.model';
import { OperacionService } from '../../../services/operacion/operacion.service';
import { LoadingService } from '../../../services/loading/loading.service';
import { AlertService } from '../../alert';
import { FormDataModel } from '../../../models/form-data.model';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent extends FormDataModel implements OnInit {

  @Input() operacion: Operacion;
  constructor(public operacionService: OperacionService,
              private loadingService: LoadingService,
              private alertService: AlertService) {
    super(operacionService);
  }

  ngOnInit(): void {
  }

  get numOperacion(): string {
    return this.operacion.numOperacion ? this.operacion.numOperacion : '';
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

  findOperacion(): void {
    console.log('finding...');
    this.loadingService.setLoading(true);
    this.operacionService.queryNumOperacion(this.numOperacion).subscribe(
      (value) => {
        console.log(value);
        this.loadingService.setLoading(false);
        this.alertService.showAlert('Found operación!');
      },
      (error) => {
        this.loadingService.setLoading(false);
        console.log(error);
        this.alertService.showAlert('No se encontró operación', 'error');
      }
    );
  }

}
