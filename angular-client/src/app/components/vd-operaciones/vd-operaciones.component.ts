import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OperacionService } from '../../services/operacion/operacion.service';
import { Operacion } from '../../models/operacion.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-vd-operaciones',
  templateUrl: './vd-operaciones.component.html',
  styleUrls: ['./vd-operaciones.component.scss']
})
export class VdOperacionesComponent implements OnInit {
  operacionSub: Subscription;
  operacion: Operacion;
  operaciones: Operacion[];
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
  }

  onSelected(index: number): void {
    this.operacionService.changeOperacion(this.operaciones[index]);
  }
}
