import { TipoOperacion } from '../interfaces/operacion.interface';
import { Producto } from './producto.model';
import { Financiamiento } from './financiamiento.model';

export class Operacion {

  numOperacion: string;
  tipo: TipoOperacion;
  fecha: string;
  folio: string;
  refPagos: string;
  cliente: string;
  persona: string;
  descripcion: string;
  asesor: string;
  financiamiento: Financiamiento;
  comentarios: string;


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
