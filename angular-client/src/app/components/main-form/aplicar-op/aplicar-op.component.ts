import { Component, OnDestroy, OnInit } from '@angular/core';
import { AplicarOpService } from '../../../services/aplicar-op/aplicar-op.service';
import { Subscription } from 'rxjs';
import { AplicarOp } from '../../../models/aplicar-operacion.model';

@Component({
  selector: 'app-aplicar-op',
  templateUrl: './aplicar-op.component.html',
  styleUrls: ['./aplicar-op.component.scss']
})
export class AplicarOpComponent implements OnInit, OnDestroy {
  aplicarOp: AplicarOp;
  private aplicarOpSub: Subscription;
  constructor(private aplicarOpService: AplicarOpService) { }

  ngOnInit(): void {
    this.aplicarOpSub = this.aplicarOpService.aplicarOpChanged
      .subscribe((aplicarOp) => {
        this.aplicarOp = aplicarOp;
        console.log(this.aplicarOp);
      });
  }

  ngOnDestroy(): void {
    this.aplicarOpSub.unsubscribe();
  }

  update(key: string, $event: Event): void {
    this.aplicarOpService.modify(key, ($event.target as HTMLInputElement).value);
  }
}
