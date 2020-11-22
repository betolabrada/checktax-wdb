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
  private operacionesSubscription: Subscription;
  constructor(private operacionService: OperacionService) { }

  ngOnInit(): void {
    this.operaciones = this.operacionService.getOperaciones();
    console.log(this.operaciones);
    this.operacionesSubscription = this.operacionService.fetchOperaciones()
      .subscribe((operaciones) => {
        this.operaciones = operaciones;
      });
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
      return '';
    } else {
      return '';
    }
  }

  get referencia(): string {
    return '';
  }

  get cliente(): string {
    return '';
  }

  get descripcion(): string {
    return '';
  }

  get fondeador(): string {
    if (this.operacionService.operacionTieneFinanciamiento()) {
      return '';
    } else {
      return '';
    }
  }

  get valorOperacion(): string {
    if (this.operacionService.operacionTieneFinanciamiento()) {
      return '';
    } else {
      return '';
    }
  }


  ngOnDestroy(): void {
    this.operacionesSub.unsubscribe();
    this.operacionSub.unsubscribe();
  }
}
