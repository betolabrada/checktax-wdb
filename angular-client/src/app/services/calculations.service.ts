import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculationsService {

  capital: number;
  plazo: number;
  intereses: number;
  fecha: Date;
  iva: number;
  global: boolean;

  constructor(capital: number, plazo: number, intereses: number, fecha: Date, iva: number, global :boolean) {
    this.capital = capital;
    this.plazo = plazo;
    this.intereses = intereses;
    this.fecha = fecha;
    this.iva = iva;
    this.global = global;
  }

  calcularPagoMenSaldosInsolutos(pago: number, capital: number){
    let actCapital = capital-pago;
    let intereses = (capital*this.intereses)/12;
    let iva = intereses*this.iva;
    let total = pago+intereses+iva;

    let pagoMen = {
      capital: actCapital,
      intereses: intereses,
      iva: iva,
      total: total
    };

    return pagoMen;
  }

  calcularPagosSaldosInsolutos(){
    let pagosMen = [];
    let actCapital = this.capital;
    const pago = this.capital/this.plazo;

    for(let i = 0; i < this.plazo; i++){
      let men = this.calcularPagoMenSaldosInsolutos(pago, actCapital);
      pagosMen.push(men);
      actCapital = men.capital;
    }

    return pagosMen;
  }

  calcularPagoMenGlobal(pago: number, capital: number){
    let actCapital = capital-pago;
    let intereses = (this.capital*this.intereses)/12;
    let iva = intereses*this.iva;
    let total = pago+intereses+iva;

    let pagoMen = {
      capital: actCapital,
      intereses: intereses,
      iva: iva,
      total: total
    };

    return pagoMen;
  }

  calcularPagosGlobal(){
    let pagosMen = [];
    let actCapital = this.capital;
    const pago = this.capital/this.plazo;

    for(let i = 0; i < this.plazo; i++){
      let men = this.calcularPagoMenGlobal(pago, actCapital);
      pagosMen.push(men);
      actCapital = men.capital;
    }

    return pagosMen;
  }
}
