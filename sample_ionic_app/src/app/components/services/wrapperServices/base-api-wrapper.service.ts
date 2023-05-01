import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Store} from "@ngrx/store";
import {selectUserDetails} from "../../../NgRx_state/user";
import {catchError, Observable, throwError} from "rxjs";
import * as Path from "path";


export interface ApiResponse<T> {
  success: boolean;
  data: T;
  Message?: string;
}

export enum Server {
  DENZI_SERVER = 'https://dev.fynn.io',
  LOCAL_SERVER = 'http://localhost:8080/'
}

export enum ApiPath {
  LOGIN = '/authenticate',
  USER = ''
}

@Injectable({
  providedIn: 'root'
})
export class BaseApiWrapperService {

  constructor(private http: HttpClient, private store: Store) { }

  protected setHeaders(): HttpHeaders {
    let headers = new HttpHeaders();

    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Authorization', `Bearer ${this.store.select(selectUserDetails).subscribe((res => res?.id_token))}`);

    return headers;
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.status === 401) {
      console.error('Please log in');
    } else if (error.status === 500) {
      console.error('internal server error');
    } else {
      console.error('unknown error');
    }
    return throwError(error.error);
  }

  public get<T>(server: Server, path: ApiPath, id: string = ''): Observable<T> {
    const url = server + path + `/${id}`;
    const headers = this.setHeaders();
    return this.http.get<T>(url, {headers}).pipe(catchError(this.handleError));
  }

  public post<T>(server: Server, path: ApiPath, body: any): Observable<T> {
    const url = server + path;
    const headers = this.setHeaders();
    return this.http.post<T>(url, body, {headers}).pipe(catchError(this.handleError));
  }

  public put<T>(server: Server, path: ApiPath, body: any, id: string): Observable<T> {
    const url = server + path + `/${id}`;
    const headers = this.setHeaders();
    return this.http.post<T>(url, body, {headers}).pipe(catchError(this.handleError));
  }

  public patch<T>(server: Server, path: ApiPath, body: any, id: string): Observable<T> {
    const url = server + path + `/${id}`;
    const headers = this.setHeaders();
    return this.http.post<T>(url, body, {headers}).pipe(catchError(this.handleError));
  }
}
