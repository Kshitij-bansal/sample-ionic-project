import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { selectUserDetails } from 'src/app/NgRx_state/user';

export const Method = {
  authentication: 'authenticate',
};
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  store: any;
  constructor(private http: HttpClient) {}

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

  getAPIUrl(endpoint: string | undefined) {
    let url = environment.apiURL;
    return url + endpoint;
  }

  getHeader() {
    let header = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = { headers: header };
    return options;
  }

  getRequest(endpoint: string, requestParams?: any, pathVarible?: string) {
    try {
      let url = this.getAPIUrl(endpoint);
      let params = new HttpParams();
      if (requestParams) {
        Object.keys(requestParams).forEach(function (key) {
          if (key && requestParams[key]) {
            params = params.append(key, requestParams[key]);
          }
        });
      }
      if (pathVarible) {
        url = url + pathVarible;
      }

      return this.http.get<Object>(url, { params });
    } catch (e) {
      return null;
    }
  }

  postData(endpoint: string, data: any): Observable<any> {
    let response:any;

    try {
      let url = this.getAPIUrl(endpoint);
      let options = this.getHeader();
      response= this.http.post<any>(url, data, options);
    } catch (error) {
      response=error;
    }
    return response;
  }
}
