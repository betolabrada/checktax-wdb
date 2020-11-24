import { Component, Input, OnDestroy, OnInit } from '@angular/core';
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
import { AlertService } from '../../alert';
import { ProductoTipofinService } from '../../../services/producto-tipofin.service';

@Component({
  selector: 'app-financiamiento',
  templateUrl: './financiamiento.component.html',
  styleUrls: ['./financiamiento.component.scss']
})
export class FinanciamientoComponent implements OnInit, OnDestroy {

  productStr: string;
  product: Producto;
  productoSub: Subscription;
  tipoFin: TipoFinanciamiento;
  financiamiento: Financiamiento;
  financiamientoSub: Subscription;
  @Input() operacion: Operacion;
  typeaheadFunc: ($text: Observable<string>) => Observable<readonly any[]>;
  productos: Producto[];
  private productosSubscription: Subscription;
  private tipoFinSubscription: Subscription;
  constructor(private operacionService: OperacionService,
              private financiamientoService: FinanciamientoService,
              private productoService: ProductoService,
              private tipoFinService: TipoFinanciamientoService,
              private productoTipoFinService: ProductoTipofinService,
              private loadingService: LoadingService,
              private alertService: AlertService) {}

  ngOnInit(): void {
    this.productos = this.productoService.getProductos();
    this.productosSubscription = this.productoService.fetchProductos()
      .subscribe((productos) => {
        this.productos = productos;
      });
    this.financiamientoSub = this.financiamientoService.financiamientoChanged
      .subscribe((financiamiento: Financiamiento) => {
        this.financiamiento = financiamiento;
        console.log('new financiamiento: ', financiamiento);
        if (this.financiamiento.idProductoTipoFinanciamiento) {
          this.productoTipoFinService.getProductoTipoFin(this.financiamiento.idProductoTipoFinanciamiento);
        }
      });
    this.productoSub = this.productoTipoFinService.productoChanged
      .subscribe((producto: Producto) => {
        console.log('producto changed', producto);
        this.product = producto;
      });
    this.tipoFinSubscription = this.productoTipoFinService.tipoFinChanged
      .subscribe((tipoFin: TipoFinanciamiento) => {
        console.log('tipoFin changed', tipoFin);
        this.tipoFin = tipoFin;
      });
  }

  ngOnDestroy() {
    this.financiamientoSub.unsubscribe();
    this.productoSub.unsubscribe();
    this.productosSubscription.unsubscribe();
    this.tipoFinSubscription.unsubscribe();
  }

  get producto(): string {
    return this.product?.producto || '';
  }

  get valorOp(): number {
    return this.financiamiento?.valorOperacion || 0;
  }

  get fondeador(): number {
    return this.financiamiento?.idConcepto || 0;
  }

  get noPagos(): number {
    return this.financiamiento?.noPagos ? this.financiamiento.noPagos : 0;
  }

  get periodicidad(): string {
    return this.financiamiento?.periodicidad ? this.financiamiento.periodicidad : '';
  }

  fetchProduct($event: NgbTypeaheadSelectItemEvent): void {
    this.loadingService.setLoading(true);
    this.productoService.productoByName($event.item).subscribe(
      (value) => {
        this.loadingService.setLoading(false);
        this.product = value;
        this.productoService.changeProducto(this.product);
        this.financiamientoService.modify('idProducto', this.product.idProducto);
        this.financiamientoService.modify('producto', value);
      },
      (error) => {
        this.loadingService.setLoading(false);
        this.alertService.showAlert('Error al obtener datos del producto', 'error');
        this.product = null;
        this.financiamientoService.modify('producto', this.product);
      }
    );
  }

  update(key: string, $event: Event): void {
    this.financiamientoService.modify(key, ($event.target as HTMLInputElement).value);
  }

  onChangeTipoFin($event: Event): void {
    const data = ($event.target as HTMLInputElement).value;
    this.tipoFinService.buscaTipoFin(data);
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.productos
          .map((producto) => producto.producto)
          .filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )
}
