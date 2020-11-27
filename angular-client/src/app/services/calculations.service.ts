import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Pago } from '../models/pago.model';

@Injectable({
  providedIn: 'root'
})
export class CalculationsService {

  private _calcResult: Pago[] = [];
  calcResultSubject = new BehaviorSubject<Pago[]>([]);
  calcResult$ = this.calcResultSubject.asObservable();

  private _capital = 0;
  private _plazo = 0;
  private _intereses = 0;
  private _fecha: Date = null;
  private _iva = 0.16;
  private _mensual = null;

  constructor() {}

  get capital(): number {
    return this._capital;
  }

  set capital(value: number) {
    this._capital = value;
  }

  get plazo(): number {
    return this._plazo;
  }

  set plazo(value: number) {
    this._plazo = value;
  }

  get intereses(): number {
    return this._intereses;
  }

  set intereses(value: number) {
    this._intereses = value;
  }

  get fecha(): Date {
    return this._fecha;
  }

  set fecha(value: Date) {
    this._fecha = value;
  }

  get iva(): number {
    return this._iva;
  }

  set iva(value: number) {
    this._iva = value;
  }

  get mensual(): boolean {
    return this._mensual;
  }

  set mensual(value: boolean) {
    this._mensual = value;
  }

  verifyIfCanCalculate() {
    if (this.canCalculateFin()) {
      console.log('Can calculate');
      this.performCalculation();
    }
  }

  canCalculateFin() {
    return this._plazo > 0 && this._capital > 0 && this._intereses > 0 && this._iva > 0 && !!this._mensual && !!this._fecha
  }

  performCalculation() {
    this._calcResult = this.calcularPagosGlobal();
    this.calcResultSubject.next(this._calcResult);
  }

  private addMonthToDate(date: Date){
    return new Date(date.setMonth(date.getMonth() + 1));
  }

  private addFifteenDaysToDate(date: Date){
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

  private calcularPagoMenSaldosInsolutos(pago: number, capital: number, mensual: boolean, fecha: Date){
    let actCapital = capital-pago;
    let intereses = (capital*this._intereses)/12;
    let iva = intereses*this._iva;
    let total = pago+intereses+iva;
    let actFecha;

    if(mensual){
      actFecha = this.addMonthToDate(fecha);
    } else {
      actFecha = this.addFifteenDaysToDate(fecha);
    }

    let pagoMen = {
      pago,
      fecha: actFecha,
      capital: actCapital,
      intereses,
      iva,
      total
    };

    return pagoMen;
  }

  calcularPagosSaldosInsolutos(){
    let pagosMen = [];
    let actCapital = this._capital;
    let actDate = this._fecha;
    const pago = this._capital/this._plazo;

    for(let i = 0; i < this._plazo; i++){
      let men = this.calcularPagoMenSaldosInsolutos(pago, actCapital, this._mensual, actDate);
      pagosMen.push(men);
      actCapital = men.capital;
      actDate = men.fecha;
    }

    return pagosMen;
  }

  private calcularPagoMenGlobal(pago: number, capital: number, mensual: boolean, fecha: Date){
    let actCapital = capital-pago;
    let intereses = (this._capital*this._intereses)/12;
    let iva = intereses*this._iva;
    let total = pago+intereses+iva
    let actFecha;

    if(mensual){
      actFecha = this.addMonthToDate(fecha);
    } else {
      actFecha = this.addFifteenDaysToDate(fecha);
    }

    let pagoMen = {
      pago,
      fecha: actFecha,
      capital: actCapital,
      intereses: intereses,
      iva,
      total
    };

    return pagoMen;
  }

  calcularPagosGlobal(){
    let pagosMen = [];
    let actCapital = this._capital;
    let actDate = this._fecha;
    const pago = this._capital/this._plazo;

    for(let i = 0; i < this._plazo; i++){
      let men = this.calcularPagoMenGlobal(pago, actCapital, this._mensual, actDate);
      pagosMen.push(men);
      actCapital = men.capital;
      actDate = men.fecha;
    }

    return pagosMen;
  }

  clear() {
    this._calcResult = [];
    this._fecha = null;
    this._mensual = false;
    this._plazo = 0;
    this._capital = 0;
  }
}
