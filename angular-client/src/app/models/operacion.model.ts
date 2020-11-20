import { Financiamiento } from './financiamiento.model';
import { Factura, Impuesto, LoteAuto, SeguroAuto } from './otros.model';
import { AplicarOp } from './aplicar-operacion.model';

enum TipoOperacion {
  Normal,
  Cotizacion,
  SinPlan
}

export class Operacion {

  numOperacion: string;
  tipo: TipoOperacion;
  fecha: string;
  folio: string;
  referenciaPagos: string;
  cliente: string;
  persona: string;
  descripcion: string;
  asesor: string;
  financiamiento: Financiamiento;
  aplicarOp: AplicarOp;
  impuesto: Impuesto;
  loteAutos: LoteAuto;
  seguroAuto: SeguroAuto;
  comentarios: string;
  tfIva: boolean;
  tfSeguro: boolean;
  fPago: string;
  poliza: string;
  tfSeguroFin: boolean;
  tipoUnidad: string;
  fechaPago: Date;
  relPago: string;
  marca: string;
  version: string;
  importe: number;
  idCentroCosto: number;
  factura: Factura;
  estatus: string;
  cancelado: boolean;
  aplicPagos: boolean;
  fFondeo: Date;
  confirmado: boolean;

  constructor(numOperacion: string) {
    this.numOperacion = numOperacion;
    this.tipo = TipoOperacion.Normal;
    this.persona = 'Física';
  }

  update(key: string, value: any): void {
    try {
      this[key] = value;
    } catch (err) {
      console.log(err);
    }
  }
}
