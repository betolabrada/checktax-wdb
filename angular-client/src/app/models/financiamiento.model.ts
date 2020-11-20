import { Producto, TipoFinanciamiento } from './producto.model';

export interface Financiamiento {
  producto: Producto;
  tipoFin: TipoFinanciamiento;
  fondeador: string;
  noPagos: string;
  periodicidad: string;
  valorOperacion: string;
  tasaAnual: string;
  totalPrimerPago: string;
}
