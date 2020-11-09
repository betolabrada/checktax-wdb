export enum TipoOperacion {
  Normal,
  Cotizacion,
  SinPlanPagos
}

export interface OperacionInterface {
  numOperacion: string;
  tipo: TipoOperacion;
  fecha?: string;
  folio?: string;
  refPagos?: string;
  cliente?: string;
  persona?: string;
  descripcion?: string;
  asesor?: string;
}
