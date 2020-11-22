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
import { AlertService } from '../../alert';

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
  private productosSubscription: Subscription;
  constructor(private operacionService: OperacionService,
              private financiamientoService: FinanciamientoService,
              private productoService: ProductoService,
              private tipoFinService: TipoFinanciamientoService,
              private loadingService: LoadingService,
              private alertService: AlertService) {}

  ngOnInit(): void {
    this.productos = this.productoService.getProductos();
    this.productosSubscription = this.productoService.fetchProductos()
      .subscribe((productos) => {
        this.productos = productos;
        console.log('productos en angular:', this.productos);
      });
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
    return '';
  }

  // get valorOp(): string {
  //   return this.financiamiento.valorOperacion ? this.financiamiento.valorOperacion : '';
  // }
  //
  // get fondeador(): string {
  //   return this.financiamiento.fondeador ? this.financiamiento.fondeador : '';
  // }
  //
  // get noPagos(): string {
  //   return this.financiamiento.noPagos ? this.financiamiento.noPagos : '';
  // }
  //
  // get periodicidad(): string {
  //   return this.financiamiento.periodicidad ? this.financiamiento.periodicidad : '';
  // }

  fetchProduct($event: NgbTypeaheadSelectItemEvent): void {
    this.loadingService.setLoading(true);
    this.productoService.productoByName($event.item).subscribe(
      (value) => {
        this.loadingService.setLoading(false);
        this.product = value;
        this.productoService.changeProducto(this.product);
        this.operacionService.modify('producto', value);
      },
      (error) => {
        this.loadingService.setLoading(false);
        this.alertService.showAlert('Error al obtener datos del producto', 'error');
        this.product = null;
        this.operacionService.modify('producto', this.product);
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
