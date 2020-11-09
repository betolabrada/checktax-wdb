import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private loading = new BehaviorSubject<boolean>(false);
  loading$ = this.loading.asObservable();
  constructor() { }

  setLoading(loading: boolean): void {
    this.loading.next(loading);
  }
}
