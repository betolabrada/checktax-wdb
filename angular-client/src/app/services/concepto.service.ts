import { Injectable } from '@angular/core';
import { Concepto } from '../models/financiamiento.model';
import { ApiService } from './api/api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConceptoService {

  constructor(private apiService: ApiService) { }

  getConceptos(): Observable<Concepto[]> {
    return this.apiService.get<Concepto[]>(`/concepto`);
  }

  findConcepto(idConcepto: number) {
    return this.apiService.get<Concepto>(`/concepto/${idConcepto}`);
  }
}
