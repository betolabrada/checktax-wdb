import { Producto } from '../models/producto.model';

export interface FinanciamientoInterface {
  producto: Producto;
  fondeador: string;
  noPagos: number;
  periodicidad: string;
  valorOperacion: number;
  tasaAnual: number;
}
