export class Impuesto {
  iva: string;
  empresa: string;
  porcentaje: number;
}

export class SeguroAuto {
  compania: string;
  primaTotal: number;
  formaPago: string;
  noPoliza: number;
  financiado: boolean;
  fechaInicio: Date;
  fechaFinal: Date;
  tipoUnidad: string;
  fechaPago: Date;
  relacionPago: string;
  siniestros: string;
  cantPolizas: string;
  sigVcmto: string;
  asegurado: string;
}

export class Factura {
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
