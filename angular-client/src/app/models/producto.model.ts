export class Producto {
  idProducto: string | number;
  producto: string;
  tipoFin: TipoFinanciamiento[];
  selectedTipoFin: TipoFinanciamiento;
  constructor(idProducto: string | number, producto: string, tipoFin: TipoFinanciamiento[]) {
    this.idProducto = idProducto;
    this.producto = producto;
    this.tipoFin = tipoFin;
  }
}

export class ProductoTipoFinanciamiento {
  id: string;
  producto: Producto;
  tipoFin: TipoFinanciamiento;
}

export class TipoFinanciamiento {
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
  constructor(idTipoFin: string | number,
              tipoFin: string) {
    this.idTipoFin = idTipoFin;
    this.tipoFin = tipoFin;
  }

}
