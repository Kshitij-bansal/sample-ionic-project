import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getAPIUrl(endpoint: string | undefined) {
    let url = environment.apiURL;
    return url+ endpoint;
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
    console.log(endpoint);
    let url = this.getAPIUrl(endpoint);
    console.log(url);
    return this.http.post<any>(url,data);
  }
}
