import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/components/services/http.service';
import { FYNN, COMPANION } from 'src/app/constants/strings';
import { Store } from '@ngrx/store';
import {
  UserState,
  allLoginScreenActions,
  selectUserDetails,
} from '../../../NgRx_state/user';
import { AuthenticateRequestData } from '../../../components/models/request/authenticateRequest.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  fynn: string = FYNN;
  companion: string = COMPANION;
  isLoading: boolean;
  state = 'in';
  loginForm: FormGroup;
  emailRegex = '^[_a-z0-9-]+(.[_a-z0-9-]+)*@(.[a-z0-9-]*)[.](.[a-z]+)$';
  passwordRegex = '^(?=.*?[A-Z])(?=.*?[#?!@$%^&*-_]).{8,}';

  // Show password classes
  passwordType = 'password';
  passwordIcon = 'eye-off';

  constructor(
    private fb: FormBuilder,
    private httpService: HttpService,
    private store: Store
  ) {}

  ngOnInit() {
    console.log('isLoading', this.isLoading);
    this.state = 'in';
    this.loginForm = this.fb.group({
      username: [
        '',
        [Validators.required, Validators.pattern(this.emailRegex)],
      ],
      password: [
        '',
        [Validators.required, Validators.pattern(this.passwordRegex)],
      ],
    });
  }

  ngOnChange() {
    console.log('NG on change called');
    this.store.select(selectUserDetails).subscribe((res: any) => {
      console.log(res, 'DATA ON LOGIN');
      this.isLoading = res.isLoading;
    });
  }

  // submitLogin() {
  //   const { username, password } = this.loginForm.value;
  //   console.log('Valid');
  //   this.httpService
  //     .postData('/authenticate', { username, password })
  //     .subscribe((result) => {
  //       console.log(result);
  //     });
  //   console.log('done');
  //   this.loginForm.reset();
  // }

  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  login(): void {
    const data: AuthenticateRequestData = this.loginForm.value;
    this.store.dispatch(
      allLoginScreenActions.loginFlowInitiated({
        authData: data,
        isLoading: this.isLoading,
      })
    );
    console.log('NG on login called');
    this.store.select(selectUserDetails).subscribe((res: any) => {
      console.log(selectUserDetails, 'DATA ON LOGIN');
      this.isLoading = res.isLoading;
    });
  }

  logout(): void {
    this.store.dispatch(allLoginScreenActions.logoutFlowInitiated());
  }
}
