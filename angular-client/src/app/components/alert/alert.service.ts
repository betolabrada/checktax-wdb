import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

import { Alert, AlertType } from './alert.model';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private subject = new Subject<Alert>();
  private defaultId = 'default-alert';
  options = {
    autoClose: true,
    keepAfterRouteChange: false,
  };

  showAlert(msg: string, type: string = ''): void {
    if (!type.length) {
      this.success(msg, this.options);
    } else {
      switch (type) {
        case 'error': {
          this.error(msg, this.options);
          break;
        }
        case 'info': {
          this.info(msg, this.options);
          break;
        }
        case 'success': {
          this.success(msg, this.options);
          break;
        }
        case 'warn': {
          this.warn(msg, this.options);
          break;
        }
      }
    }
  }

  // Enable subscribing to alerts observable
  onAlert(id = this.defaultId): Observable<Alert> {
    return this.subject.asObservable().pipe(filter(x => x && x.id === id));
  }

  // Convenience methods
  private success(message: string, options?: any): void {
    this.alert(new Alert({ ...options, type: AlertType.Success, message }));
  }

  private error(message: string, options?: any): void {
    this.alert(new Alert({ ...options, type: AlertType.Error, message }));
  }

  private info(message: string, options?: any): void {
    this.alert(new Alert({ ...options, type: AlertType.Info, message }));
  }

  private warn(message: string, options?: any): void {
    this.alert(new Alert({ ...options, type: AlertType.Warning, message }));
  }

  // Main alert method
  private alert(alert: Alert): void {
    alert.id = alert.id || this.defaultId;
    this.subject.next(alert);
  }

  // clear alerts
  clear(id = this.defaultId): void {
    this.subject.next(new Alert({ id }));
  }
}
