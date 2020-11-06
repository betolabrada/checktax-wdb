import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor(private api: ApiService) { }

  getValidatorErrorMessage(validatorName: string, validatorValue?: any): string {
    const config = {
      required: 'Required',
    };

    return config[validatorName];
  }

  contactValidator()
}
