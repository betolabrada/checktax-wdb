import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { OperacionService } from '../../services/operacion/operacion.service';
import { Operacion } from '../../models/operacion.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-vd-operaciones',
  templateUrl: './vd-operaciones.component.html',
  styleUrls: ['./vd-operaciones.component.scss']
})
export class VdOperacionesComponent implements OnInit, OnDestroy {
  operacionSub: Subscription;
  operacion: Operacion;
  operaciones: Operacion[];
  private operacionesSub: Subscription;
  constructor(private operacionService: OperacionService) { }

  ngOnInit(): void {
    this.operaciones = this.operacionService.getOperaciones();
    console.log(this.operaciones);
    this.operacionSub = this.operacionService.operacionChanged
      .subscribe(
        (operacion: Operacion) => {
          this.operacion = operacion;
        }
      );
    this.operacionesSub = this.operacionService.listChanged
      .subscribe((operaciones) => {
        this.operaciones = operaciones;
      });
  }

  onSelected(index: number): void {
    this.operacionService.changeOperacion(this.operaciones[index]);
  }

  get numOperacion(): string {
    return this.operacion.numOperacion ? this.operacion.numOperacion : '';
  }

  get fecha(): string {
    return this.operacion.fecha ? this.operacion.fecha : '';
  }

  get noPagos(): string {
    if (this.operacionService.operacionTieneFinanciamiento()) {
      return this.operacion.financiamiento.noPagos.toString();
    } else {
      return '';
    }
  }

  get referencia(): string {
    return this.operacion.referenciaPagos ? this.operacion.referenciaPagos : '';
  }

  get cliente(): string {
    return this.operacion.cliente ? this.operacion.cliente : '';
  }

  get descripcion(): string {
    return this.operacion.descripcion ? this.operacion.descripcion : '';
  }

  get fondeador(): string {
    if (this.operacionService.operacionTieneFinanciamiento()) {
      return this.operacion.financiamiento.fondeador;
    } else {
      return '';
    }
  }

  get valorOperacion(): string {
    if (this.operacionService.operacionTieneFinanciamiento()) {
      return this.operacion.financiamiento.valorOperacion.toString();
    } else {
      return '';
    }
  }


  ngOnDestroy(): void {
    this.operacionesSub.unsubscribe();
    this.operacionSub.unsubscribe();
  }
}
