import { Component, Input, OnInit } from '@angular/core';
import { Operacion } from '../../../models/operacion.model';
import { OperacionService } from '../../../services/operacion/operacion.service';
import { LoadingService } from '../../../services/loading/loading.service';
import { AlertService } from '../../alert';
import { DateFormatterService } from '../../../services/date-formatter.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

  indexOperacion: number;
  editMode: boolean;
  @Input() operacion: Operacion;
  textFecha = '';
  constructor(private operacionService: OperacionService,
              private loadingService: LoadingService,
              private alertService: AlertService,
              private dateFormatter: DateFormatterService) {
  }

  ngOnInit(): void {
  }

  get numOperacion(): string {
    return this.operacion.numOperacion ? this.operacion.numOperacion : '';
  }

  get fecha(): string {
    if (this.operacion.fecha) {
      return this.operacion.fecha;
    }
    return this.textFecha;
  }

  get folio(): string {
    return typeof this.operacion.folio === 'string' ? this.operacion.folio : '';
  }

  get refPagos(): string {
    return typeof this.operacion.referenciaPagos === 'string' ? this.operacion.referenciaPagos : '';
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

  handleInput($event: Event): void {
    const inputElValue = ($event.target as HTMLInputElement).value;
    console.log(this.numOperacion, inputElValue);
    if (this.checkIfChangedOrBlank(inputElValue)) {
      this.cleanup();
    } else {
      this.findOperacion();
    }
  }

  findOperacion(): void {
    console.log('finding...');
    this.loadingService.setLoading(true);
    if (this.numOperacion.length === 0) { return; }
    this.operacionService.queryNumOperacion(this.numOperacion).subscribe(
      (value) => {
        console.log(value);
        this.loadingService.setLoading(false);
        this.alertService.showAlert('Found operación!');
        this.operacionService.changeOperacion(value);
      },
      (error) => {
        this.loadingService.setLoading(false);
        console.log(error);
        this.alertService.showAlert('No se encontró operación, creando nueva', 'info');
        this.operacionService.createOperacion(this.numOperacion);
      }
    );
  }

  checkIfChangedOrBlank(value: string): boolean {
    if (this.operacion.numOperacion !== value) {
      return true;
    }
    if (this.numOperacion.length === 0) {
      console.log('Changed to empty, cleaning up...');
      return true;
    }
    return false;
  }

  update(key: string, $event: Event): void {
    this.operacionService.modify(key, ($event.target as HTMLInputElement).value);
  }

  cleanup(): void {
    this.operacionService.clear();
  }

  dateFormat(textFecha: string) {
    console.log(textFecha);
    const dateStr = this.dateFormatter.formatInput(textFecha);
    this.operacionService.modify('fecha', dateStr);

  }

  onInput(value: any) {
    this.textFecha = value;
  }
}
