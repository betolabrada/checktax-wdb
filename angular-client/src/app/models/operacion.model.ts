import { OperacionInterface, TipoOperacion } from '../interfaces/operacion.interface';

export class OperacionModel implements OperacionInterface {

  numOperacion: string;
  tipo: TipoOperacion;
  fecha?: string;
  folio?: string;
  refPagos?: string;
  cliente?: string;
  persona?: string;
  descripcion?: string;
  asesor?: string;

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
