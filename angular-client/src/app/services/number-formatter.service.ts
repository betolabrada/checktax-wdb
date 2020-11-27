import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberFormatterService {

  constructor() { }

  format(num: number): string {
    if (num === null || typeof num === 'undefined') {
      return '';
    }
    let str = num.toString();
    const decimalPlace = str.indexOf('.');
    let res = '';
    if (decimalPlace >= 0) {
      if (decimalPlace + 2 < str.length - 1) {
        res += str.substring(decimalPlace, decimalPlace + 3);
      } else {
        res += str.substring(decimalPlace);
      }
      str = str.substring(0, decimalPlace);
    }
    const reverse = str.split('').reverse().join('');
    const iterator = reverse[Symbol.iterator]();
    let theChar = iterator.next();
    const commas = str.length % 3 === 0 ? Math.floor(str.length / 3 - 1) :
      Math.floor(str.length / 3);
    const newLen = str.length + commas;
    let j = 1;
    for (let i = newLen - 1; i >= 0; i--) {
      if (j > 0 && j % 4 === 0) {
        res = ',' + res;
      } else {
        res = theChar.value + res;
        theChar = iterator.next();
      }
      j++;

    }
    return res;
  }

  formatToNumber(num: string) {
    let str = num;
    while (str.includes(',')) {
      str = num.replace(',', '');
    }
    return parseFloat(str);
  }
}
