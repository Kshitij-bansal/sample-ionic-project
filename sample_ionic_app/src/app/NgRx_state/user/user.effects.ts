import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {LoginService} from "../../screens/authentication/login/login.service";

import * as UserActions from "./user.actions";
import {catchError, map, of, switchMap, tap} from "rxjs";
import {Store} from "@ngrx/store";
import {Route, Router} from "@angular/router";
import {NavigationPath} from "../../constants/navigation_path";


@Injectable()
export class UserEffects {
  constructor(
    private actions: Actions<any>,
    private loginService: LoginService,
    private store: Store,
    private router: Router,
  ) {}



login = createEffect(
  () =>
    this.actions.pipe(
      ofType(UserActions.LoginActions.loginFlowInitiated.type),
      switchMap((action) =>
        {

          return this.loginService.login(action.authData).pipe(
            map((userdata) => {
              return UserActions.LoginActions.loginSucceeded({ userDetails: userdata });
            }),
            tap(() => {
              this.router.navigate([NavigationPath.DASHBOARD]);
            }),
            catchError((error) => of (UserActions.LoginActions.loginFailed) )
          )
        }
      )
    ),
  { dispatch: true }
);

  logout = createEffect(
    () =>
      this.actions.pipe(
        ofType(UserActions.LogoutActions.logoutFlowInitiated.type),
        tap(() => this.loginService.logout())
      ),
    { dispatch: false }
  );
}
