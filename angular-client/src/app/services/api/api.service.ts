import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { retryWhen, mergeMap } from 'rxjs/operators';
import { Observable, timer, throwError } from 'rxjs';

export const BASEURL      = 'https://test.historeat.app:3000/api';
export const BASEURL_DEV  = 'http://localhost:3000/api';
const HTTP_HEADERS        = new HttpHeaders({'Content-Type': 'application/json'});
const RETRY_ATTEMPTS      = 5;
const RETRY_STATUS_CODES  = [ 408, 429, 504];
const RETRY_MILLISECONDS  = 10000;



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public token = '';
  public debugMode = false;

  constructor(private http: HttpClient, private storage: Storage) {}

  public get(endPoint: string, getVariables: any = {}, useToken: boolean = true, displayErrors: boolean = true): Observable<JSON> {
    const link: string = this.genLink(endPoint, useToken, getVariables);
    return this.processHttpRequest(this.http.get<JSON>(link, { headers: HTTP_HEADERS }), displayErrors);
  }

  public post(endPoint: string, body: object, useToken: boolean = true, displayErrors: boolean = true): Observable<JSON>{
    const link: string = this.genLink(endPoint, useToken);
    return this.processHttpRequest(this.http.post<JSON>(link, body, { headers: HTTP_HEADERS }), displayErrors);
  }

  public patch(endPoint: string, body: object, useToken: boolean = true, displayErrors: boolean = true): Observable<JSON>{
    const link: string = this.genLink(endPoint, useToken);
    return this.processHttpRequest(this.http.patch<JSON>(link, body, { headers: HTTP_HEADERS }), displayErrors);
  }

  public put(endPoint: string, body: object, useToken: boolean = true, displayErrors: boolean = true): Observable<JSON>{
    const link: string = this.genLink(endPoint, useToken);
    return this.processHttpRequest(this.http.put<JSON>(link, body, { headers: HTTP_HEADERS }), displayErrors);
  }

  public delete(endPoint: string, useToken: boolean = true, displayErrors: boolean = true): Observable<JSON>{
    const link: string = this.genLink(endPoint, useToken);
    return this.processHttpRequest(this.http.delete<JSON>(link, { headers: HTTP_HEADERS }), displayErrors);
  }

  public async setToken(token: string): Promise<void> {
    await this.storage.ready();
    await this.storage.set('token', token);
    this.token = token;
  }


  private processHttpRequest(request: Observable<JSON>, displayErrors): Observable<JSON> {
    return request.pipe(
      retryWhen(errorResponse => this.retryOnConnectionError(errorResponse, displayErrors))
    );
  }

  private genLink(endPoint: string, useToken: boolean, getVars: any[] = []): string {
    useToken = useToken && this.token && this.token.length > 0;

    let baseURL = (this.debugMode ? BASEURL_DEV : BASEURL) + endPoint + '?';

    if (endPoint.includes('?')){
      baseURL = (this.debugMode ? BASEURL_DEV : BASEURL) + endPoint + '&';
    }

    if (getVars != null && getVars.length > 0) {
      for (const variable of getVars) {
        baseURL = `${baseURL}${variable}=${getVars[variable]}&`;
      }
    }
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

  private async setDebugMode(): Promise<void> {
    await this.storage.ready();
    this.debugMode = await this.storage.get('debugMode');
  }

  public async getToken(): Promise<string> {
    await this.storage.ready();
    this.token = await this.storage.get('token');
    return this.token;
  }

  public get baseURL(): string {
    return this.debugMode ? BASEURL_DEV : BASEURL;
  }
}
