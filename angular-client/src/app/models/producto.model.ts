export class Producto {
  idProducto: string;
  producto: string;
}

export class ProductoTipoFinanciamiento {
  id: string;
  producto: Producto;
  tipoFin: TipoFinanciamiento;
}

export class TipoFinanciamiento {
  idTipoFin: string;
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
