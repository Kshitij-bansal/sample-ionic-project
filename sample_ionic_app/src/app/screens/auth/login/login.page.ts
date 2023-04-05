import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],

})
export class LoginPage implements OnInit {

  state = 'in';
  loginForm: FormGroup ;
   emailRegex =
    '^[_a-z0-9-]+(.[_a-z0-9-]+)*@(.[a-z0-9-]*)[.](.[a-z]+)$';
   passwordRegex = '^(?=.*?[A-Z])(?=.*?[#?!@$%^&*-_]).{8,}';

  // Show password classes
  passwordType = 'password';
  passwordIcon = 'eye-off';


  constructor(
    private fb: FormBuilder,
  //  private store: Store,

  ) {}

  ngOnInit() {
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

  submitLogin() {
    const { username, password } = this.loginForm.value;
    if (this.loginForm.valid && this.loginForm.valueChanges) {
   // this.authFacade.login(username, password);
     console.log('Valid');
      this.loginForm.reset();
    } else {
      console.log('In-Valid');
     // this.store.dispatch(AuthActions.loginFailure({ error: true }));
    }
  }

  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  // FORM GETTERS
  // eslint-disable-next-line @typescript-eslint/member-ordering
  get username() {
    return this.loginForm.get('username');
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  get password() {
    return this.loginForm.get('password');
  }
}