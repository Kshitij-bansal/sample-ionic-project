import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {LoginService} from "../../screens/authentication/login/login.service";

import * as UserActions from "./user.actions";
import {catchError, map, of, switchMap, tap} from "rxjs";
import {Store} from "@ngrx/store";


@Injectable()
export class UserEffects {
  constructor(
    private actions: Actions<any>,
    private loginService: LoginService,
    private store: Store,
  ) {}

  login = createEffect(
    () =>
      this.actions.pipe(
        ofType(UserActions.allLoginScreenActions.loginFlowInitiated.type),
        switchMap((action) =>
          {

            return this.loginService.login(action.authData).pipe(
              map((userdata) => {
                return UserActions.allLoginScreenActions.loginSucceeded({ userDetails: userdata });
              }),
              catchError((error) => of(UserActions.allLoginScreenActions.loginFailed) )
            )
          }
        )
      ),
    { dispatch: true }
  );

  logout = createEffect(
    () =>
      this.actions.pipe(
        ofType(UserActions.allLoginScreenActions.logoutFlowInitiated.type),
        tap(() => this.loginService.logout())
      ),
    { dispatch: false }
  );
}
