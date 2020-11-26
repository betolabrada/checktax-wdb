import { Component, OnInit } from '@angular/core';
import { LoteAuto } from '../../../models/otros.model';
import { Observable, Subscription } from 'rxjs';
import { LoteAutosService } from '../../../services/lote-autos/lote-autos.service';
import { Producto } from '../../../models/producto.model';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { NgbTypeaheadSelectItemEvent } from '@ng-bootstrap/ng-bootstrap';
import { LoadingService } from '../../../services/loading/loading.service';

@Component({
  selector: 'app-lote-autos',
  templateUrl: './lote-autos.component.html',
  styleUrls: ['./lote-autos.component.scss']
})
export class LoteAutosComponent implements OnInit {

  loteAutos: LoteAuto[];
  loteAuto: LoteAuto;
  loteAutoSubscription: Subscription;
  typeaheadFunc: ($text: Observable<string>) => Observable<readonly any[]>;
  constructor(private loteAutosService: LoteAutosService,
              private loadingService: LoadingService) { }

  ngOnInit(): void {
    this.loteAutoSubscription = this.loteAutosService.loteAutoChanged
      .subscribe((loteAuto: LoteAuto) => {
        this.loteAuto = loteAuto;
      });
    this.loteAutos = this.loteAutosService.getList();
    this.typeaheadFunc = search.bind(this);
  }

  update(key: string, $event: Event): void {
    this.loteAutosService.modify(key, ($event.target as HTMLInputElement).value);
  }

  fetch($event: NgbTypeaheadSelectItemEvent<any>) {
    this.loadingService.setLoading(true);
    //  -- BACKEND --
    // this.productoService.productoByName($event.item).subscribe(
    //   (value) => {
    //     this.loadingService.setLoading(false);
    //     this.product = value;
    //     this.operacionService.modify('producto', value);
    //   },
    //   (error) => {
    //     this.loadingService.setLoading(false);
    //     this.alertService.showAlert('Error al obtener datos del producto', 'error');
    //     this.product = new Producto(10, $event.item, []);
    //     this.operacionService.modify('producto', this.product);
    //   }
    // );
    this.loteAuto = this.loteAutosService.localLoteAutoByName($event.item);
    this.loteAutosService.changeLote(this.loteAuto);
    this.loadingService.setLoading(false);
  }
}

function search(text$: Observable<string>): Observable<readonly any[]> {
  const loteAutos: LoteAuto[] = this.loteAutos;
  return text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    map((term) => term.length < 2 ? [] :
      loteAutos
        .map((prod) => prod.razonSocial)
        .filter((value) => value.toLowerCase().indexOf(term.toLowerCase()) > -1)
    )
  );
}
