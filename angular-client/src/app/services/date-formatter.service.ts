import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateFormatterService {

  months = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC']
  dateRegex = /\d\d-[a-zA-Z]{3}-\d\d/;
  regex = new RegExp(this.dateRegex);
  constructor() { }

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
}
