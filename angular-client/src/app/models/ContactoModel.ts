export interface ContactoModel {
  numOperacion: string; // Primary key
  tipo: 'Operación';
  fecha: string;
  folio: string;
  referenciaPagos: string; // Único para cada operación (digamos, secondary key)
  cliente: string; // Foreign key referenciando Contacto
  persona: 'Física' | 'Moral';
  descripcion: string;
  asesor: string; // id
  financiamiento: number; // id
  aplicarOp: number;
}
