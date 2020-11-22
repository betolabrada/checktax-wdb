import { Financiamiento } from './financiamiento.model';
import { Factura, Impuesto, LoteAuto, SeguroAuto } from './otros.model';
import { AplicarOp } from './aplicar-operacion.model';

export enum TipoOperacion {
  Normal,
  Cotizacion,
  SinPlan
}

export interface Operacion {

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
  fechaPago: string;
  relPago: string;
  marca: string;
  version: string;
  importe: number;
  idCentroCosto: number;
  factura: Factura;
  estatus: string;
  cancelado: boolean;
  aplicPagos: boolean;
  fFondeo: string;
  confirmado: boolean;
}

export const defaultOperacion: Operacion = {
  numOperacion: '',
  tipo: TipoOperacion.Normal,
  fecha: '',
  folio: '',
  referenciaPagos: '',
  cliente: '',
  persona: '',
  descripcion: '',
  asesor: '',
  financiamiento: null,
  aplicarOp: null,
  impuesto: null,
  loteAutos: null,
  seguroAuto: null,
  comentarios: '',
  tfIva: false,
  tfSeguro: false,
  fPago: '',
  poliza: '',
  tfSeguroFin: false,
  tipoUnidad: '',
  fechaPago: '',
  relPago: '',
  marca: '',
  version: '',
  importe: 0,
  idCentroCosto: 0,
  factura: null,
  estatus: '',
  cancelado: false,
  aplicPagos: false,
  fFondeo: '',
  confirmado: false,
};
