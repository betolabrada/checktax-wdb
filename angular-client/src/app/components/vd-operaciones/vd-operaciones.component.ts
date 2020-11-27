import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { OperacionService } from '../../services/operacion/operacion.service';
import { Operacion } from '../../models/operacion.model';
import { forkJoin, from, Observable, of, Subscription } from 'rxjs';
import { FinanciamientoService } from '../../services/financiamiento/financiamiento.service';
import { Concepto, Financiamiento } from '../../models/financiamiento.model';
import { count, map, pluck, switchMap, tap } from 'rxjs/operators';
import { ConceptoService } from '../../services/concepto.service';

@Component({
  selector: 'app-vd-operaciones',
  templateUrl: './vd-operaciones.component.html',
  styleUrls: ['./vd-operaciones.component.scss']
})
export class VdOperacionesComponent implements OnInit, OnDestroy {
  operacion: Operacion;
  operaciones: Operacion[];
  concepto$: Observable<string>;
  private operacionesSub: Subscription;
  constructor(private operacionService: OperacionService,
              private financiamientoService: FinanciamientoService,
              private conceptoService: ConceptoService) { }

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
  }
}
