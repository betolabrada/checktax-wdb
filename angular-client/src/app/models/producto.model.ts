export interface Producto {
  idProducto: number;
  producto: string;
  tiposFin: TipoFinanciamiento[];
}

export interface TipoFinanciamiento {
  idTipoFin: number;
  tipoFin: string;
  tasa: number;
  anticipo: number;
  apertura: number;
  deposito: number;
  vRescate: number;
  tfValorRescate: string;
  descuento: number;
  admon: number;
  tfAdmon: null;
  gps: number;
  tfGps: string;
  seguroAuto: number;
  tfSeguroAuto: string;
  seguroDeuda: number;
  tfSeguroDeuda: string;
  liquidacion: number;
  ppTipo: string;
}

export const defaultProducto = {
  idProducto: 0,
  producto: '',
  tiposFin: []
};
