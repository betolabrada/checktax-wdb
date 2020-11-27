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
import { NumberFormatterService } from '../../../services/number-formatter.service';
import { CalculationsService } from '../../../services/calculations.service';
import { DateFormatterService } from '../../../services/date-formatter.service';

interface Pago {
  pago: number;
  fecha: Date;
  capital: number;
  intereses: number;
  iva: number;
  total: number;
}

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
  calcResult: Pago[] = [];
  private calculationsService: CalculationsService;
  private productosSubscription: Subscription;
  private tipoFinSubscription: Subscription;
  constructor(private operacionService: OperacionService,
              private financiamientoService: FinanciamientoService,
              private productoService: ProductoService,
              private tipoFinService: TipoFinanciamientoService,
              private productoTipoFinService: ProductoTipofinService,
              private loadingService: LoadingService,
              private alertService: AlertService,
              private numberFormat: NumberFormatterService,
              private dateFormatter: DateFormatterService) {}

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

  get valorOp(): string {
    return this.numberFormat.format(this.financiamiento?.valorOperacion);
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

  get anticipo(): string {
    return this.numberFormat.format(this.tipoFin?.anticipo);
  }

  get apertura(): string {
    return this.numberFormat.format(this.tipoFin?.apertura);
  }

  get seguroDeuda(): string {
    return this.numberFormat.format(this.tipoFin?.seguroDeuda);
  }

  get seguroAuto(): string {
    return this.numberFormat.format(this.tipoFin?.seguroAuto);
  }

  get deposito(): string {
    return this.numberFormat.format(this.tipoFin?.deposito);
  }

  get admon(): string {
    return this.numberFormat.format(this.tipoFin?.admon);
  }

  get gps(): string {
    return this.numberFormat.format(this.tipoFin?.gps);
  }

  get vRescate(): string {
    return this.numberFormat.format(this.tipoFin?.vRescate);
  }

  get descuento(): string {
    return this.numberFormat.format(this.tipoFin?.descuento);
  }

  get tipoFinValue(): number {
    return this.tipoFin?.idTipoFin || 0;
  }

  get importeAnticipo(): string {
    if (this.financiamiento?.valorOperacion && this.tipoFin?.anticipo) {
      return this.numberFormat.format (this.financiamiento.valorOperacion * (this.tipoFin.anticipo / 100));
    } else {
      return '';
    }
  }

  get importeApertura(): string {
    if (this.financiamiento?.valorOperacion && this.tipoFin?.apertura) {
      return this.numberFormat.format (this.financiamiento.valorOperacion * (this.tipoFin.apertura / 100));
    } else {
      return '';
    }
  }

  get importeDescuento(): string {
    if (this.calcResult[0]?.pago && this.tipoFin?.descuento) {
      return this.numberFormat.format(this.calcResult[0].pago * (this.tipoFin.descuento / 100));
    } else {
      return '';
    }
  }

  get primerPago(): string {
    if (this.calcResult[0]?.pago) {

      return this.numberFormat.format(
        this.numberFormat.formatToNumber(this.importeApertura) +
        this.numberFormat.formatToNumber(this.importeAnticipo) -
        this.numberFormat.formatToNumber(this.importeDescuento) +
        this.numberFormat.formatToNumber(this.vRescate) +
        this.numberFormat.formatToNumber(this.gps) +
        this.numberFormat.formatToNumber(this.admon) +
        this.numberFormat.formatToNumber(this.deposito) +
        this.numberFormat.formatToNumber(this.seguroAuto) +
        this.numberFormat.formatToNumber(this.seguroDeuda) +
        this.calcResult[0].pago
      );
    } else {
      return '';
    }
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
    if (this.financiamiento?.valorOperacion && this.financiamiento.valorOperacion > 0) {
      const valorAFinanciar = .70 * this.financiamiento.valorOperacion;
      const date = this.dateFormatter.isInFormat(this.operacion.fecha) ?
        this.operacion.fecha : this.dateFormatter.formattedDate(this.operacion.fecha);
      console.log('this.financiamiento.periodicidad', this.financiamiento.periodicidad);
      // Servicio
      this.calculationsService = new CalculationsService(
        valorAFinanciar,
        this.financiamiento.noPagos,
        0.24,
        new Date(date),
        0.16,
        this.financiamiento.periodicidad === 'Mensual'
      );

      console.log('calc service', this.calculationsService);
      console.log('tipoFin', this.tipoFin);
      const result = this.calculationsService.calcularPagosGlobal();
      this.calcResult = result;
      console.log('result ', result);
    }
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
