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
  mensual: boolean;

  constructor(capital: number, plazo: number, intereses: number, fecha: Date, iva: number, mensual :boolean) {
    this.capital = capital;
    this.plazo = plazo;
    this.intereses = intereses;
    this.fecha = fecha;
    this.iva = iva;
    this.mensual = mensual;
  }

  addMonthToDate(date: Date){
    return new Date(date.setMonth(date.getMonth()+8));
  }

  addFifteenDaysToDate(date: Date){
    if(date.getDay()==15){
      let result = new Date(date);
      result.setDate(result.getDate() + 15);
      return result;
    } else {
      let result = new Date(date);
      result.setDate(result.getDate() - 15);
      result = this.addMonthToDate(result);
      return result;
    }
  }

  calcularPagoMenSaldosInsolutos(pago: number, capital: number, mensual: boolean, fecha: Date){
    let actCapital = capital-pago;
    let intereses = (capital*this.intereses)/12;
    let iva = intereses*this.iva;
    let total = pago+intereses+iva;
    let actFecha;

    if(mensual){
      actFecha = this.addMonthToDate(fecha);
    } else {
      actFecha = this.addFifteenDaysToDate(fecha);
    }

    let pagoMen = {
      fecha: actFecha,
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
    let actDate = this.fecha;
    const pago = this.capital/this.plazo;

    for(let i = 0; i < this.plazo; i++){
      let men = this.calcularPagoMenSaldosInsolutos(pago, actCapital, this.mensual, actDate);
      pagosMen.push(men);
      actCapital = men.capital;
      actDate = men.fecha;
    }

    return pagosMen;
  }

  calcularPagoMenGlobal(pago: number, capital: number, mensual: boolean, fecha: Date){
    let actCapital = capital-pago;
    let intereses = (this.capital*this.intereses)/12;
    let iva = intereses*this.iva;
    let total = pago+intereses+iva
    let actFecha;

    if(mensual){
      actFecha = this.addMonthToDate(fecha);
    } else {
      actFecha = this.addFifteenDaysToDate(fecha);
    }

    let pagoMen = {
      fecha: actFecha,
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
    let actDate = this.fecha;
    const pago = this.capital/this.plazo;

    for(let i = 0; i < this.plazo; i++){
      let men = this.calcularPagoMenGlobal(pago, actCapital, this.mensual, actDate);
      pagosMen.push(men);
      actCapital = men.capital;
      actDate = men.fecha;
    }

    return pagosMen;
  }
}
