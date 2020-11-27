import { Producto } from './producto.model';

export interface Concepto {
  idConcepto: number;
  concepto: string;
}

export interface Financiamiento {
  idFinanciamiento: number | string;
  idProductoTipoFinanciamiento: number;
  producto: Producto;
  idConcepto: number;
  concepto: Concepto;
  valorOperacion: number;
  noPagos: number;
  periodicidad: string;
  totalPrimerPago: number;
  descripcion: string;
}

export const defaultFinanciamiento: Financiamiento = {
  idFinanciamiento: '',
  idProductoTipoFinanciamiento: null,
  producto: null,
  idConcepto: null,
  concepto: null,
  valorOperacion: 0,
  noPagos: 0,
  periodicidad: '',
  totalPrimerPago: 0,
  descripcion: ''
};

