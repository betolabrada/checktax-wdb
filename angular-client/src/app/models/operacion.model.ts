

export interface Operacion {
  numOperacion: string;
  tipo: string;
  fecha: string;
  folio: string;
  referenciaPagos: number;
  cliente: number;
  persona: string;
  descripcion: string;
  asesor: number;
  idFinanciamiento: number;
  aplicarOp: number;
  impuestos: number;
  loteAutos: number;
  seguroAuto: number;
  comentarios: string;
  tfIva: string | boolean;
  tfSeguro: string | boolean;
  tfPago: string | boolean;
  poliza: string;
  tfSeguroFin: string | boolean;
  tipoUnidad: string;
  fechaPago: string;
  relPago: string;
  marca: string;
  factura: string;
  version: string;
  importe: number;
  tipoFin: string;
  idCentroCosto: number;
  idFactura: number;
  estatus: string;
  cancelado: string | boolean;
  aplicPagos: string | boolean;
  fFondeo: string;
  confirmado: string | boolean;
}

export const defaultOperacion: Operacion = {
  numOperacion: '',
  tipo: null,
  fecha: null,
  folio: null,
  referenciaPagos: null,
  cliente: null,
  persona: null,
  descripcion: null,
  asesor: null,
  idFinanciamiento: null,
  aplicarOp: null,
  impuestos: null,
  loteAutos: null,
  seguroAuto: null,
  comentarios: null,
  tfIva: null,
  tfSeguro: null,
  tfPago: null,
  poliza: null,
  tfSeguroFin: null,
  tipoUnidad: null,
  fechaPago: null,
  relPago: null,
  marca: null,
  factura: null,
  version: null,
  importe: null,
  tipoFin: null,
  idCentroCosto: null,
  idFactura: null,
  estatus: null,
  cancelado: null,
  aplicPagos: null,
  fFondeo: null,
  confirmado: null,
};
