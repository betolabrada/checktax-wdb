import { Injectable } from '@angular/core';

interface AplicarOp {
  chequera: string;
  sucursal: string;
}

@Injectable({
  providedIn: 'root'
})
export class AplicarOpService {

  constructor() { }
}
