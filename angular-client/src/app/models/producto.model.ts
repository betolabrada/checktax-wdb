export interface Producto {
  idProducto: string | number;
  producto: string;
  tipoFin: TipoFinanciamiento[];
}

export interface TipoFinanciamiento {
  idTipoFin: string | number;
  tipoFin: string;
  tasa: number;
  anticipo: number;
  apertura: number;
  deposito: number;
  vRescate: number;
  tfRescate: boolean;
  descuento: number;
  admon: number;
  tfAdmon: boolean;
  gps: number;
  tfGps: boolean;
  seguroAuto: number;
  tfSeguroAuto: boolean;
  seguroDeuda: number;
  tfSeguroDeuda: boolean;
  liquidacion: number;
  ppTipo: string;
}
