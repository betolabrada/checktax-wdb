import { Producto, TipoFinanciamiento } from './producto.model';

export interface FinanciamientoParams {
  valor: number;
  esPorcentaje: boolean;
  importe: number;
}

export class Financiamiento {
  producto: Producto;
  fondeador: string;
  noPagos: number;
  periodicidad: string;
  valorOperacion: number;
  tasaAnual: number;
  totalPrimerPago: number;
}
