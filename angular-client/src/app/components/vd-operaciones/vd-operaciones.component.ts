import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { OperacionService } from '../../services/operacion/operacion.service';
import { Operacion } from '../../models/operacion.model';
import { from, of, Subscription } from 'rxjs';
import { FinanciamientoService } from '../../services/financiamiento/financiamiento.service';
import { Financiamiento } from '../../models/financiamiento.model';
import { count, map, pluck, tap } from 'rxjs/operators';

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
  private financiamiento: Financiamiento;
  private financiamientoSubscription: Subscription;
  constructor(private operacionService: OperacionService,
              private financiamientoService: FinanciamientoService) { }

  ngOnInit(): void {
    this.operaciones = this.operacionService.getOperaciones();
    this.operacionService.fetchOperaciones();
    this.operacionesSub = this.operacionService.operacionesChanged
      .subscribe((operaciones) => {
        this.operaciones = operaciones;
      });
  }

  onSelected(index: number): void {
    this.operacionService.changeOperacion(this.operaciones[index]);
  }

  ngOnDestroy(): void {
    this.operacionesSub.unsubscribe();
    this.operacionSub.unsubscribe();
  }
}
