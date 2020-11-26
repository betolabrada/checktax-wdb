import { Injectable } from '@angular/core';
import { AlertService } from '../components/alert';

@Injectable({
  providedIn: 'root'
})
export class DateFormatterService {

  months = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC']
  dateRegex = /\d\d-[a-zA-Z]{3}-\d\d/;
  regex = new RegExp(this.dateRegex);
  constructor(private alertService: AlertService) { }

  isInFormat(dateString: string): boolean {
    return this.regex.test(dateString);
  }

  formattedDate(fecha: string): string {
    const date = new Date(fecha);
    const year = date.getFullYear().toString(10).substring(2);
    let month: number | string = date.getMonth();
    let dt: number | string = date.getDate();

    if (dt < 10) {
      dt = '0' + dt;
    }
    month = this.months[month];
    return `${dt}-${month}-${year}`;
  }

  formatInput(textFecha: string) {
    let errMsg = '';
    const array = textFecha.split('-');
    if (array.length !== 3) {
      errMsg += 'Fecha debe contener día, mes y año (separado con "-")';
      this.alertService.showAlert(errMsg, 'error');
      return '';
    }
    const date = array[0];
    if (date.length !== 2) {
      errMsg += 'Input de día inválido';
      this.alertService.showAlert(errMsg, 'error');
      return '';
    }
    const month = array[1];
    if (month.length !== 3) {
      errMsg += 'Input de mes inválido';
      this.alertService.showAlert(errMsg, 'error');
      return '';
    }
    const year = array[2];
    if (year.length !== 2) {
      errMsg += 'Input de año inválido';
      this.alertService.showAlert(errMsg, 'error');
      return '';
    }
    return `${date}-${month.toLocaleUpperCase()}-${year}`;
  }
}
