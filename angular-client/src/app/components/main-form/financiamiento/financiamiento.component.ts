import { Component, Input, OnInit } from '@angular/core';
import { Operacion } from '../../../models/operacion.model';
import { OperacionService } from '../../../services/operacion/operacion.service';
import { Observable, Subscription } from 'rxjs';
import { Producto, TipoFinanciamiento } from '../../../models/producto.model';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { NgbTypeaheadSelectItemEvent } from '@ng-bootstrap/ng-bootstrap';
import { ProductoService } from '../../../services/producto/producto.service';
import { LoadingService } from '../../../services/loading/loading.service';
import { Financiamiento } from '../../../models/financiamiento.model';
import { FinanciamientoService } from '../../../services/financiamiento/financiamiento.service';
import { TipoFinanciamientoService } from '../../../services/tipo-financiamiento/tipo-financiamiento.service';

@Component({
  selector: 'app-financiamiento',
  templateUrl: './financiamiento.component.html',
  styleUrls: ['./financiamiento.component.scss']
})
export class FinanciamientoComponent implements OnInit {

  productStr: string;
  product: Producto;
  productoSub: Subscription;
  tipoFin: TipoFinanciamiento;
  financiamiento: Financiamiento;
  financiamientoSub: Subscription;
  @Input() operacion: Operacion;
  typeaheadFunc: ($text: Observable<string>) => Observable<readonly any[]>;
  productos: Producto[];
  constructor(private operacionService: OperacionService,
              private financiamientoService: FinanciamientoService,
              private productoService: ProductoService,
              private tipoFinService: TipoFinanciamientoService,
              private loadingService: LoadingService) {}

  ngOnInit(): void {
    this.typeaheadFunc = searchProduct.bind(this);
    this.productos = this.productoService.getProductos();
    this.financiamientoSub = this.financiamientoService.financiamientoChanged
      .subscribe((financiamiento: Financiamiento) => {
        this.financiamiento = financiamiento;
        console.log(this.financiamiento);
        if (!this.financiamiento) {
          this.product = null;
        }
      });
    this.productoSub = this.productoService.productoChanged
      .subscribe((producto: Producto) => {
        this.product = producto;
      });
    this.tipoFinService.tipoFinChanged
      .subscribe((tipoFin: TipoFinanciamiento) => {
        this.tipoFin = tipoFin;
        console.log(this.tipoFin);
      });
  }

  get producto(): string {
    if (this.operacionService.operacionTieneFinanciamiento() && this.financiamientoService.hasSelectedProducto()) {
      return this.financiamiento.producto.producto;
    } else {
      return '';
    }
  }

  get valorOp(): string {
    return this.financiamiento.valorOperacion ? this.financiamiento.valorOperacion : '';
  }

  get fondeador(): string {
    return this.financiamiento.fondeador ? this.financiamiento.fondeador : '';
  }

  get noPagos(): string {
    return this.financiamiento.noPagos ? this.financiamiento.noPagos : '';
  }

  get periodicidad(): string {
    return this.financiamiento.periodicidad ? this.financiamiento.periodicidad : '';
  }

  fetchProduct($event: NgbTypeaheadSelectItemEvent): void {
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
    this.product = this.productoService.localProductoByName($event.item);
    this.productoService.changeProducto(this.product);
    this.loadingService.setLoading(false);
  }

  update(key: string, $event: Event): void {
    this.financiamientoService.modify(key, ($event.target as HTMLInputElement).value);
  }

  onChangeTipoFin($event: Event): void {
    const data = ($event.target as HTMLInputElement).value;
    this.tipoFinService.buscaTipoFin(data);
  }
}

function searchProduct(text$: Observable<string>): Observable<readonly any[]> {
  const productos: Producto[] = this.productos;
  return text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    map((term) => term.length < 2 ? [] :
      productos
        .map((prod) => prod.producto)
        .filter((value) => value.toLowerCase().indexOf(term.toLowerCase()) > -1)
    )
  );
}
