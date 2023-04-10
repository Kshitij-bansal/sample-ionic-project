import { Injectable } from '@angular/core';
import {AuthenticateData} from "../../../components/models/response/authenticate.model";
import {HttpService} from "../../../components/services/http.service";
import {AuthenticateRequestData} from "../../../components/models/request/authenticateRequest.model";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private httpService: HttpService) { }

  login(authData: AuthenticateRequestData) {
    return this.httpService.postData('/authenticate',authData);
  }

  logout() {

  }

}
