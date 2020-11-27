import { Injectable } from '@angular/core';
import { Concepto } from '../models/financiamiento.model';
import { ApiService } from './api/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConceptoService {

  constructor(private apiService: ApiService) { }

  getConceptos(): Observable<Concepto[]> {
    return this.apiService.get<Concepto[]>(`/concepto`);
  }
}
