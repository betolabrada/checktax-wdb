
export interface Financiamiento {
  idFinanciamiento: number | string;
  idProducto: number;
  idConcepto: number;
  noPagos: number;
  periodicidad: string;
  totalPrimerPago: number;
  descripcion: string;
}

export const defaultFinanciamiento: Financiamiento = {
  idFinanciamiento: '',
  idProducto: null,
  idConcepto: null,
  noPagos: 0,
  periodicidad: '',
  totalPrimerPago: 0,
  descripcion: ''
};

