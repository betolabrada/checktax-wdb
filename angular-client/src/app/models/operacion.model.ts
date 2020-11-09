import { TipoOperacion } from '../interfaces/operacion.interface';
import { Producto } from './producto.model';

export class OperacionModel {

  numOperacion: string;
  tipo: TipoOperacion;
  fecha: string;
  folio: string;
  refPagos: string;
  cliente: string;
  persona: string;
  descripcion: string;
  asesor: string;
  producto: Producto | null;
  fondeador: string;


  constructor(numOperacion: string) {
    this.numOperacion = numOperacion;
    this.tipo = TipoOperacion.Normal;
    this.persona = 'Física';
  }

  update(key: string, value: any): void {
    try {
      this[key] = value;
    } catch (err) {
      console.log(err);
    }
  }
}
