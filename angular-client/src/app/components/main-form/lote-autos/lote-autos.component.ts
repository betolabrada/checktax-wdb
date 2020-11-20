import { Component, OnInit } from '@angular/core';
import { LoteAuto } from '../../../models/otros.model';
import { Subscription } from 'rxjs';
import { LoteAutosService } from '../../../services/lote-autos/lote-autos.service';

@Component({
  selector: 'app-lote-autos',
  templateUrl: './lote-autos.component.html',
  styleUrls: ['./lote-autos.component.scss']
})
export class LoteAutosComponent implements OnInit {

  loteAuto: LoteAuto;
  loteAutoSubscription: Subscription;
  constructor(private loteAutosService: LoteAutosService) { }

  ngOnInit(): void {
    this.loteAutoSubscription = this.loteAutosService.loteAutosChanged
      .subscribe((loteAuto: LoteAuto) => {
        this.loteAuto = loteAuto;
      });
  }

  update(key: string, $event: Event): void {
    this.loteAutosService.modify(key, ($event.target as HTMLInputElement).value);
  }

}
