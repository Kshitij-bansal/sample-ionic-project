import { Injectable } from '@angular/core';
import {AuthenticateData} from "../../../components/models/response/authenticate.model";
import { HttpService, Method} from "../../../components/services/http.service";
import {AuthenticateRequestData} from "../../../components/models/request/authenticateRequest.model";
import { devAuthBody } from 'src/app/components/models/common_variables';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private httpService: HttpService) { }

  login(authData: AuthenticateRequestData) {
    console.log("log printed");
    console.log(authData);
    return this.httpService.postData(Method.authentication,devAuthBody);
  }

  logout() {
  }

}
