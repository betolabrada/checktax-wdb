import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { retryWhen, mergeMap } from 'rxjs/operators';
import { Observable, timer, throwError } from 'rxjs';

export const BASEURL      = 'http://localhost:3000/v1/api';
export const BASEURL_DEV  = 'http://localhost:3000/api';
const HTTP_HEADERS        = new HttpHeaders({'Content-Type': 'application/json'});
const RETRY_ATTEMPTS      = 5;
const RETRY_STATUS_CODES  = [ 408, 429, 504];
const RETRY_MILLISECONDS  = 10000;



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  public get baseURL(): string {
    return this.debugMode ? BASEURL_DEV : BASEURL;
  }
  public token = '';
  public debugMode = false;

  public get<T>(endPoint: string, paramsObj: object = {}, useToken: boolean = true, displayErrors: boolean = true): Observable<T> {
    const link: string = this.genLink(endPoint, useToken);
    const params = new HttpParams({ fromObject: { ...paramsObj } });
    return this.processHttpRequest(this.http.get<T>(link, { headers: HTTP_HEADERS, params }), displayErrors);
  }

  public post<T>(endPoint: string, body: object, useToken: boolean = true, displayErrors: boolean = true): Observable<T>{
    const link: string = this.genLink(endPoint, useToken);
    return this.processHttpRequest(this.http.post<T>(link, body, { headers: HTTP_HEADERS }), displayErrors);
  }

  public patch<T>(endPoint: string, body: object, useToken: boolean = true, displayErrors: boolean = true): Observable<T>{
    const link: string = this.genLink(endPoint, useToken);
    return this.processHttpRequest(this.http.patch<T>(link, body, { headers: HTTP_HEADERS }), displayErrors);
  }

  public put<T>(endPoint: string, body: object, useToken: boolean = true, displayErrors: boolean = true): Observable<T>{
    const link: string = this.genLink(endPoint, useToken);
    return this.processHttpRequest(this.http.put<T>(link, body, { headers: HTTP_HEADERS }), displayErrors);
  }

  public delete<T>(endPoint: string, useToken: boolean = true, displayErrors: boolean = true): Observable<T>{
    const link: string = this.genLink(endPoint, useToken);
    return this.processHttpRequest(this.http.delete<T>(link, { headers: HTTP_HEADERS }), displayErrors);
  }

  private processHttpRequest<T>(request: Observable<T>, displayErrors): Observable<T> {
    return request.pipe(
      retryWhen(errorResponse => this.retryOnConnectionError(errorResponse, displayErrors))
    );
  }

  private genLink(endPoint: string, useToken: boolean, getVars: object = {}): string {
    useToken = useToken && this.token && this.token.length > 0;

    const baseURL = (this.debugMode ? BASEURL_DEV : BASEURL) + endPoint ;

    return useToken ? baseURL + 'access_token=' + this.token : baseURL;
  }

  private retryOnConnectionError(errorResponse: Observable<any>, displayErrors): Observable<any> {
    return errorResponse.pipe(
      mergeMap( (error, retryAttempts) => {
        if (retryAttempts >= RETRY_ATTEMPTS || !RETRY_STATUS_CODES.find(code => error.status === code)) {
          return throwError(error);
        }
        if (displayErrors) {
          console.log(`Connection lost. Retrying in ${RETRY_MILLISECONDS / 1000} seconds...`, 1000);
        }
        return timer(RETRY_MILLISECONDS);
      })
    );
  }
}
