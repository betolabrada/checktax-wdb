export interface Impuesto {
  iva: string;
  empresa: string;
  porcentaje: number;
}

export interface SeguroAuto {
  compania: string;
  primaTotal: number;
  formaPago: string;
  noPoliza: number;
  financiado: boolean;
  fechaInicio: string;
  fechaFinal: string;
  tipoUnidad: string;
  fechaPago: string;
  relacionPago: string;
  siniestros: string;
  cantPolizas: string;
  sigVcmto: string;
  asegurado: string;
}

export interface Factura {
  idFactura: number;
  ffzc: string;
  ffzi: string;
  ffzg: string;
  ffza: string;
}

export class LoteAuto {
  idLoteAuto: number;
  razonSocial: string;
  comisionSinIva: number;
  comisionConIva: number;
  importeSinIva: number;
  importeConIva: number;
  lineaVenta: string;
  sucursal: string;
  domicilio: string;
  asesor: string;
}
